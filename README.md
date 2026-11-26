# Hércules SGI — Documentación

Documentación completa del proyecto **Hércules SGI** (Sistema de Gestión de Investigación), generada a partir del espacio Confluence del proyecto y publicada como sitio estático con [Zensical](https://zensical.org/).

## Contenido

La documentación cubre las siguientes secciones principales:

- **SGI — Sistema de Gestión de Investigación**: requisitos funcionales, diseño, desarrollo, manual de usuario, integraciones y guía de implantación 
- **Arquitectura**: arquitectura técnica de los proyectos Hércules (ED, MA, RPA)
- **APIs de Integración**: servicios propios y de terceros expuestos y consumidos por el SGI
- **Portal Nacional Avanzado de Investigación** (Hércules MA — Métodos de Análisis)
- **Herramienta de CV** (Hércules ED — Enriquecimiento de Datos)
- **RPA**: módulo de automatización y gestión

## Estructura del repositorio

```
./
├── docs/                        # Fuentes Markdown (sitio publicado)
│   ├── index.md                 # Página de inicio
│   ├── assets/                  # Logo e imágenes globales
│   ├── attachments/             # Imágenes y adjuntos exportados de Confluence
│   ├── sgi/                     # Una carpeta por pestaña del sitio: SGI,
│   ├── arquitectura/            #   Arquitectura, APIs de integración,
│   ├── apis/                    #   Portal Avanzado de Investigación,
│   ├── portal-avanzado/         #   Herramienta de CV y RPA
│   ├── herramienta-cv/
│   └── rpa/
├── scripts/
│   ├── generate_nav.py          # Regenera el nav de mkdocs.yml a partir de docs/
│   ├── nav_data.yml             # Orden y estructura de nivel superior del nav
│   └── validate_docs.py         # Validaciones propias (ver «Validar»)
├── .github/workflows/ci.yml     # Valida cada cambio y publica el sitio (ver «Publicación»)
├── mkdocs.yml                   # Configuración del sitio (nav generado, no editar a mano)
└── requirements.txt
```

## Visualizar la documentación localmente

### Requisitos

Python 3.11 o superior (Zensical no admite versiones anteriores).

```bash
python3 -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
```

### Construir y servir

```bash
zensical build
zensical serve
```
Abre `http://localhost:8000` en el navegador.

`mkdocs.yml` activa el modo estricto (`strict: true`): el build falla si hay enlaces a páginas o apartados `#ancla` que no existen.

Zensical lee `mkdocs.yml` de forma nativa, así que la configuración mantiene ese formato en lugar de `zensical.toml`: el `nav:` generado (más de 2000 líneas anidadas) solo es legible en YAML, porque TOML 1.0 no admite tablas en línea de varias líneas.

### Validar

Además de `zensical build`, la CI ejecuta validaciones propias (imágenes sin texto alternativo, restos de Confluence, imágenes o adjuntos inexistentes, adjuntos que ninguna página enlaza, sincronía del nav…). Parte de ellas se ejecutan sobre el `site/` ya generado, así que primero hay que construir:

```bash
zensical build
python3 scripts/validate_docs.py
```

Para enlazar a un apartado de una página usa el identificador que se genera a partir del título del encabezado (minúsculas, sin tildes, espacios como guiones): por ejemplo, `### 3.1 Datos generales` → `#31-datos-generales`.

### Si cambias la estructura de `docs/`

El bloque `nav:` de `mkdocs.yml` se genera con `scripts/generate_nav.py`, no se edita a mano. Si añades o mueves páginas, ejecuta:

```bash
python3 scripts/generate_nav.py
```

Si el orden de las páginas nuevas dentro de una carpeta importa, añádelo a la sección `order:` de `scripts/nav_data.yml` (si no, se añaden al final por orden alfabético).

### Etiquetas

Las etiquetas alimentan los filtros del buscador y se muestran al pie de cada página. No se ponen página a página: cada carpeta puede tener un `.meta.yml` con sus `tags`, que heredan todas sus páginas y subcarpetas (las etiquetas se acumulan). Hay tres familias: el área (`SGI`, `APIs de integración`, `RPA`…), el tipo de documento (`Requisitos`, `Casos de uso`, `Interfaz de usuario`, `Manual de usuario`…) y el módulo del SGI (`Módulo CSP`, `Módulo ETI`…). Una carpeta nueva de ese tipo necesita su `.meta.yml`; una página suelta puede añadir etiquetas en su front matter.

Las etiquetas del pie no son enlaces. Sería útil que, al pulsarlas, se abriera el buscador con ese filtro aplicado, pero Zensical 0.1.0 no lo ofrece como opción ni expone una API o un parámetro de URL para preseleccionar filtros; hacerlo a mano exigiría manipular el componente interno del buscador, que cambia entre versiones. Queda pendiente hasta que Zensical lo permita.

## Publicación

El sitio se publica en GitHub Pages con GitHub Actions (`.github/workflows/ci.yml`):

- Cada PR y cada push a `main` ejecutan `zensical build` y `scripts/validate_docs.py`.
- Cada push a `main` que pasa las validaciones publica el sitio generado.

## Origen de los datos

La documentación se generó a partir del export HTML del espacio **HERCULES** del Confluence de la Universidad de Murcia (`confluence.um.es`). La conversión preserva:

- Estructura jerárquica de navegación original
- Imágenes y adjuntos exportados
- Tablas (formato GFM)
- Enlaces internos entre páginas

Los enlaces a páginas de otros espacios Confluence o a páginas nunca creadas se han conservado como texto plano.
