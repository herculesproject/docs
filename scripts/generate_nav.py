#!/usr/bin/env python3
"""Regenera el bloque `nav:` de mkdocs.yml a partir de la estructura de docs/.

Antes, el nav se escribía y mantenía a mano en un mkdocs.yml de más de
2000 líneas, sin ningún script que lo generase (pese a llevar la
cabecera "no editar manualmente"). Este script lo sustituye:

- El label de cada página/grupo se toma del primer encabezado (`# ...`)
  de su fichero .md (o de su index.md si es una carpeta). Solo se usa
  un label distinto cuando scripts/nav_data.yml lo indica explícitamente:
  los nombres cortos de las pestañas (label_override en top_level) y las
  etiquetas de `labels`, para entradas del menú cuyo título repite el de
  su pestaña y resulta demasiado largo como cabecera de sección.
- El orden de los hijos dentro de cada carpeta se toma de
  scripts/nav_data.yml (`order`), que registra el orden funcional
  original (no alfabético) extraído del nav anterior. Los ficheros
  nuevos que no aparezcan ahí se añaden al final, por orden alfabético.
- La estructura de nivel superior (qué carpetas de docs/hercules se
  promocionan a pestaña) es la que ya existía y se preserva tal cual —
  ver scripts/nav_data.yml (top_level). La pestaña de portada
  ("Visión general") contiene index.md y las páginas listadas en
  top_level.umbrella_extra_pages (rutas relativas a docs/, páginas
  sueltas fuera de docs/hercules, como "Acerca de esta documentación").
  Ya no duplica enlaces a las demás pestañas, que están justo al lado.

Uso: python3 scripts/generate_nav.py
"""
import os
import re
import sys
import yaml

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS_DIR = os.path.join(REPO_ROOT, "docs")
MKDOCS_YML = os.path.join(REPO_ROOT, "mkdocs.yml")
NAV_DATA_YML = os.path.join(REPO_ROOT, "scripts", "nav_data.yml")

H1_RE = re.compile(r"^#{1,6}\s+(.*\S)\s*$")


def load_nav_data():
    with open(NAV_DATA_YML, encoding="utf-8") as f:
        return yaml.safe_load(f)


def h1_of(rel_path):
    """Primer encabezado markdown del fichero, o None si no tiene."""
    full = os.path.join(DOCS_DIR, rel_path)
    try:
        with open(full, encoding="utf-8") as f:
            for line in f:
                m = H1_RE.match(line)
                if m:
                    return m.group(1).strip()
    except OSError:
        return None
    return None


def prettify_filename(name):
    base = name[:-3] if name.endswith(".md") else name
    return base.replace("-", " ").replace("_", " ").strip().capitalize()


def label_for(rel_path, label_overrides):
    if rel_path in label_overrides:
        return label_overrides[rel_path]
    h1 = h1_of(rel_path)
    if h1:
        return h1
    return prettify_filename(os.path.basename(rel_path))


def ordered_children(dir_rel, order_map):
    """Nombres de hijos (carpetas o ficheros .md, sin index.md) en el
    orden curado si existe, con los que falten añadidos al final
    alfabéticamente."""
    full = os.path.join(DOCS_DIR, dir_rel)
    disk_children = sorted(
        name
        for name in os.listdir(full)
        if name != "index.md" and (
            os.path.isdir(os.path.join(full, name))
            or name.endswith(".md")
        )
    )
    curated = order_map.get(dir_rel, [])
    curated_set = set(curated)
    missing_from_disk = [c for c in curated if c not in disk_children]
    if missing_from_disk:
        print(
            f"AVISO: {dir_rel}: {len(missing_from_disk)} entradas en nav_data.yml "
            f"ya no existen en disco: {missing_from_disk}",
            file=sys.stderr,
        )
    new_on_disk = [c for c in disk_children if c not in curated_set]
    result = [c for c in curated if c in disk_children] + sorted(new_on_disk)
    return result


def build_group(dir_rel, order_map, label_overrides):
    """Devuelve la lista mkdocs-nav para la carpeta dir_rel: su propio
    index.md primero, seguido de sus hijos (recursivo)."""
    index_rel = f"{dir_rel}/index.md" if dir_rel else "index.md"
    items = [index_rel]
    for child in ordered_children(dir_rel, order_map):
        child_rel = f"{dir_rel}/{child}" if dir_rel else child
        full_child = os.path.join(DOCS_DIR, child_rel)
        if os.path.isdir(full_child):
            child_label = label_for(f"{child_rel}/index.md", label_overrides)
            items.append({child_label: build_group(child_rel, order_map, label_overrides)})
        else:
            child_label = label_for(child_rel, label_overrides)
            items.append({child_label: child_rel})
    return items


def build_nav(nav_data):
    order_map = nav_data["order"]
    top_level = nav_data["top_level"]

    label_overrides = {}
    for root in top_level["roots"]:
        if root.get("label_override"):
            label_overrides[f"{root['dir']}/index.md"] = root["label_override"]
    if top_level.get("umbrella_label_override"):
        label_overrides["index.md"] = top_level["umbrella_label_override"]
    for rel, label in (nav_data.get("labels") or {}).items():
        if not rel.endswith(".md"):
            rel = f"{rel}/index.md"
        if not os.path.exists(os.path.join(DOCS_DIR, rel)):
            sys.exit(f"nav_data.yml: la etiqueta de '{rel}' apunta a un fichero inexistente")
        label_overrides[rel] = label

    nav = []

    umbrella_label = label_for("index.md", label_overrides)
    umbrella_items = ["index.md"]
    for extra_rel in top_level.get("umbrella_extra_pages", []):
        umbrella_items.append({label_for(extra_rel, label_overrides): extra_rel})
    nav.append({umbrella_label: umbrella_items})

    for root in top_level["roots"]:
        root_label = label_for(f"{root['dir']}/index.md", label_overrides)
        nav.append({root_label: build_group(root["dir"], order_map, label_overrides)})

    return nav


def read_header():
    with open(MKDOCS_YML, encoding="utf-8") as f:
        content = f.read()
    idx = content.index("\nnav:")
    return content[: idx + 1]


def dump_nav_yaml(nav):
    return yaml.dump(
        {"nav": nav},
        allow_unicode=True,
        default_flow_style=False,
        sort_keys=False,
        width=100000,
    )


def main():
    nav_data = load_nav_data()
    nav = build_nav(nav_data)
    header = read_header()
    nav_yaml = dump_nav_yaml(nav)
    with open(MKDOCS_YML, "w", encoding="utf-8") as f:
        f.write(header)
        f.write(nav_yaml)
    print(f"mkdocs.yml regenerado ({sum(1 for _ in open(MKDOCS_YML))} líneas).")


if __name__ == "__main__":
    main()
