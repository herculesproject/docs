#!/usr/bin/env python3
"""Validaciones adicionales sobre docs/ que `zensical build` no cubre.

`zensical build` (en modo estricto, ver mkdocs.yml) ya falla con enlaces a
páginas inexistentes y a anclas que no existen en enlaces markdown. Aquí se
comprueban regresiones específicas de esta limpieza:

- Imágenes markdown sin texto alternativo (![](...)).
- Artefactos de macros de Confluence no migradas.
- Enlaces viewpage.action de Confluence como hipervínculo activo
  (markdown [texto](url) o autolink <url>). Las menciones sueltas de
  una URL viewpage.action como texto plano no se consideran un
  problema: no son clicables (no hay autolink de URLs bare en la
  configuración de markdown_extensions) y documentan de forma legítima
  de dónde procede un dato.
- Enlaces o imágenes con ruta absoluta desde la raíz (`](/...)`), que
  Zensical no valida y se rompen bajo un subdirectorio.
- Enlaces al espacio HERCULES de Confluence (su contenido ya está aquí).
- Imágenes enlazadas a los Confluence de Treelogic, que exigen iniciar
  sesión y se ven rotas: hay que copiarlas a docs/attachments.
- Posibles datos sensibles en ficheros de texto de docs/ (DNI/NIE con
  letra válida, contraseñas con valor literal o en columnas de tabla,
  claves privadas, credenciales en URLs). PDF, ofimática e imágenes no
  se pueden revisar así: requieren revisión manual.
- Ficheros que superan un tamaño máximo (red de seguridad ante un
  adjunto añadido por error, no un límite editorial: el umbral es muy
  superior al mayor fichero legítimo actual).
- Que mkdocs.yml esté sincronizado con lo que generaría
  scripts/generate_nav.py a partir del estado actual de docs/.
- Enlaces locales rotos en el HTML generado: imágenes o adjuntos que no
  existen y anclas (#apartado) inexistentes en enlaces escritos en HTML.
- Adjuntos de docs/attachments que ninguna página enlaza: ocupan sitio en
  el repositorio y en la imagen sin aparecer en el sitio.
  Zensical solo valida los enlaces markdown a páginas, así que se
  comprueba sobre el sitio ya generado: hay que ejecutar `zensical build`
  antes.

Uso: python3 scripts/validate_docs.py [directorio_site]   (por defecto site/)
Sale con código distinto de 0 si encuentra algún problema.
"""
import os
import re
import subprocess
import sys
from html import unescape
from urllib.parse import unquote

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS_DIR = os.path.join(REPO_ROOT, "docs")
MAX_FILE_SIZE = 50 * 1024 * 1024  # 50 MB; el mayor adjunto legítimo actual son ~15 MB.

EMPTY_ALT_RE = re.compile(r"!\[\]\(")
PLACEHOLDER_RE = re.compile(r"plugins/servlet/confluence/placeholder")
# Solo cuenta como hipervínculo activo: markdown [texto](url) o autolink <url>.
VIEWPAGE_RE = re.compile(r"(?:\]\(|<)https?://[^)\s>]*viewpage\.action\?[^)\s>]*pageId=")
# Rutas absolutas desde la raíz (`](/...)`): Zensical no las valida y se
# rompen al servir el sitio bajo un subdirectorio. Deben ser relativas.
ROOT_ABS_RE = re.compile(r"\]\(/(?!/)")
# Enlaces al espacio HERCULES de Confluence: su contenido está en este sitio,
# deben apuntar a la página local.
CONFLUENCE_HERCULES_RE = re.compile(
    r"\]\(https?://confluence\.um\.es/confluence/(?:display/HERCULES|spaces/HERCULES|download/attachments)"
)

# Imágenes enlazadas a los Confluence de Treelogic: piden iniciar sesión y
# en el sitio se ven rotas.
PRIVATE_IMAGE_RE = re.compile(
    r"!\[[^\]]*\]\(https?://(?:treetk\.atlassian\.net|confluence\.treelogic\.com)/"
)


def iter_markdown_files():
    for root, _dirs, files in os.walk(DOCS_DIR):
        for name in files:
            if name.endswith(".md"):
                yield os.path.join(root, name)


def check_markdown_patterns():
    problems = []
    for path in iter_markdown_files():
        rel = os.path.relpath(path, REPO_ROOT)
        with open(path, encoding="utf-8") as f:
            content = f.read()
        if EMPTY_ALT_RE.search(content):
            problems.append(f"{rel}: imagen sin texto alternativo (![]())")
        if PLACEHOLDER_RE.search(content):
            problems.append(f"{rel}: placeholder de macro de Confluence sin migrar")
        if VIEWPAGE_RE.search(content):
            problems.append(f"{rel}: enlace viewpage.action de Confluence como hipervínculo activo")
        if ROOT_ABS_RE.search(content):
            problems.append(f"{rel}: enlace o imagen con ruta absoluta '](/...)'; usa una ruta relativa")
        if CONFLUENCE_HERCULES_RE.search(content):
            problems.append(f"{rel}: enlace al espacio HERCULES de Confluence; enlaza la página local")
        if PRIVATE_IMAGE_RE.search(content):
            problems.append(f"{rel}: imagen enlazada a un Confluence de Treelogic que exige iniciar sesión")
    return problems


def check_file_sizes():
    problems = []
    for root, _dirs, files in os.walk(DOCS_DIR):
        for name in files:
            path = os.path.join(root, name)
            size = os.path.getsize(path)
            if size > MAX_FILE_SIZE:
                rel = os.path.relpath(path, REPO_ROOT)
                problems.append(
                    f"{rel}: {size / 1024 / 1024:.1f} MB, supera el máximo de "
                    f"{MAX_FILE_SIZE / 1024 / 1024:.0f} MB"
                )
    return problems


def check_nav_in_sync():
    mkdocs_yml = os.path.join(REPO_ROOT, "mkdocs.yml")
    with open(mkdocs_yml, encoding="utf-8") as f:
        before = f.read()
    result = subprocess.run(
        [sys.executable, os.path.join(REPO_ROOT, "scripts", "generate_nav.py")],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
    )
    with open(mkdocs_yml, encoding="utf-8") as f:
        after = f.read()
    # Deja mkdocs.yml como estaba: este script solo valida, no aplica cambios.
    with open(mkdocs_yml, "w", encoding="utf-8") as f:
        f.write(before)
    problems = []
    if result.returncode != 0:
        problems.append(f"scripts/generate_nav.py falló: {result.stderr.strip()}")
    if result.stderr.strip().startswith("AVISO"):
        problems.append(f"scripts/generate_nav.py: {result.stderr.strip()}")
    if before != after:
        problems.append(
            "mkdocs.yml no está sincronizado con docs/: ejecuta "
            "'python3 scripts/generate_nav.py' y commitea el resultado."
        )
    return problems


DNI_LETTERS = "TRWAGMYFPDXBNJZSQVHLCKE"
DNI_RE = re.compile(r"\b(\d{8})-?([A-HJ-NP-TV-Z])\b|\b([XYZ])(\d{7})-?([A-Z])\b")
PRIVATE_KEY_RE = re.compile(r"-----BEGIN [A-Z ]*PRIVATE KEY-----")
URL_CREDENTIALS_RE = re.compile(r"\b[a-z][a-z0-9+.-]*://[^/\s:@<>()\[\]]+:[^/\s@<>()\[\]{}$]+@[\w.-]+")
SECRET_ASSIGN_RE = re.compile(
    r"(?i)[\"']?(?:password|passwd|contrase[ñn]a|pwd|secret|client_secret)[\"']?\s*[:=]\s*[\"']?([^\s\"',;<>)}]{4,})"
)
# Formato de entornos de Postman: {"key": "..._password", "value": "..."}
POSTMAN_SECRET_RE = re.compile(
    r'"key"\s*:\s*"[^"]*(?:password|secret)[^"]*"\s*,\s*"value"\s*:\s*"([^"{]+)"', re.I
)
# Cabecera de tabla markdown con una columna de contraseñas.
PASSWORD_COLUMN_RE = re.compile(r"(?im)^\|.*\b(?:contrase[ñn]a|password)s?\b[^|]*\|.*\n\|\s*:?-{3,}")
SECRET_PLACEHOLDERS = {"password", "contraseña", "secret", "changeme", "xxxx", "null", "true", "false", "string"}
SENSITIVE_EXTENSIONS = (".md", ".csv", ".json", ".txt", ".sql", ".html", ".yml", ".yaml", ".xml")


def _valid_dni(match):
    if match.group(1):
        number, letter = match.group(1), match.group(2)
    else:
        number, letter = str("XYZ".index(match.group(3))) + match.group(4), match.group(5)
    trivial = len(set(number)) <= 2 or number in ("12345678", "87654321")
    return not trivial and DNI_LETTERS[int(number) % 23] == letter


def find_sensitive_data(text):
    """Devuelve una lista de descripciones de posibles datos sensibles en `text`."""
    found = []
    if any(_valid_dni(m) for m in DNI_RE.finditer(text)):
        found.append("DNI/NIE con letra de control válida")
    if PRIVATE_KEY_RE.search(text):
        found.append("clave privada")
    if URL_CREDENTIALS_RE.search(text):
        found.append("usuario:contraseña dentro de una URL")
    for m in list(SECRET_ASSIGN_RE.finditer(text)) + list(POSTMAN_SECRET_RE.finditer(text)):
        value = m.group(1)
        if value.lower() in SECRET_PLACEHOLDERS or value.startswith(
            ("{{", "${", "$", "<", "pm.", "self.", "process.env", "os.environ", "%")
        ):
            continue
        found.append("contraseña o secreto con valor literal")
        break
    if PASSWORD_COLUMN_RE.search(text):
        found.append("tabla con columna de contraseñas")
    return found


def check_sensitive_data():
    """Red de seguridad ante credenciales o datos personales (ver historial del repo).

    Solo revisa ficheros de texto; PDF, hojas de cálculo e imágenes requieren
    revisión manual.
    """
    problems = []
    for root, _dirs, files in os.walk(DOCS_DIR):
        for name in files:
            if not name.lower().endswith(SENSITIVE_EXTENSIONS):
                continue
            path = os.path.join(root, name)
            with open(path, encoding="utf-8", errors="replace") as f:
                found = find_sensitive_data(f.read())
            for what in found:
                problems.append(f"{os.path.relpath(path, REPO_ROOT)}: posible dato sensible ({what})")
    return problems


ARTICLE_RE = re.compile(r"<article\b.*?</article>", re.S)
ID_RE = re.compile(r'\sid="([^"]*)"')
LOCAL_REF_RE = re.compile(r'<(?:a|img)\b[^>]*\s(?:href|src)="([^"]*)"')


def check_local_links(site_dir):
    """Enlaces e imágenes del contenido que apuntan a un fichero o a una ancla
    (#apartado) que no existe en el sitio generado, y adjuntos que ninguna
    página enlaza.

    Zensical solo valida los enlaces markdown a páginas .md y sus anclas: no
    las imágenes, los adjuntos ni los enlaces escritos en HTML.
    """
    if not os.path.isdir(site_dir):
        return [f"{site_dir} no existe: ejecuta 'zensical build' antes de este script."]
    pages = {}
    for root, _dirs, files in os.walk(site_dir):
        for name in files:
            if name.endswith(".html"):
                path = os.path.join(root, name)
                with open(path, encoding="utf-8") as f:
                    pages[os.path.normpath(path)] = f.read()
    ids = {p: set(ID_RE.findall(html)) for p, html in pages.items()}
    problems = []
    referenced = set()
    for path, html in sorted(pages.items()):
        rel = os.path.relpath(path, site_dir)
        for article in ARTICLE_RE.findall(html):
            for ref in LOCAL_REF_RE.findall(article):
                url, _, anchor = unescape(ref).partition("#")
                url = url.partition("?")[0]
                if re.match(r"^[a-z][a-z0-9+.-]*:", url) or url.startswith("/"):
                    continue
                target = os.path.normpath(os.path.join(os.path.dirname(path), unquote(url))) if url else path
                if os.path.isdir(target):
                    target = os.path.join(target, "index.html")
                referenced.add(target)
                if not os.path.exists(target):
                    problems.append(f"{rel}: enlace o imagen a un fichero inexistente '{ref}'")
                elif anchor and target in ids and unquote(anchor) not in ids[target]:
                    problems.append(f"{rel}: enlace a ancla inexistente '{ref}'")
    attachments_dir = os.path.join(site_dir, "attachments")
    for root, _dirs, files in os.walk(attachments_dir):
        for name in files:
            path = os.path.normpath(os.path.join(root, name))
            if path not in referenced:
                rel = os.path.relpath(path, site_dir)
                problems.append(f"docs/{rel}: adjunto que ninguna página enlaza (bórralo o enlázalo)")
    return problems


def main():
    problems = []
    problems += check_markdown_patterns()
    problems += check_file_sizes()
    problems += check_nav_in_sync()
    problems += check_sensitive_data()
    site_dir = sys.argv[1] if len(sys.argv) > 1 else os.path.join(REPO_ROOT, "site")
    problems += check_local_links(site_dir)

    if problems:
        print(f"{len(problems)} problema(s) encontrado(s):\n")
        for p in problems:
            print(f"  - {p}")
        return 1

    print("Sin problemas.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
