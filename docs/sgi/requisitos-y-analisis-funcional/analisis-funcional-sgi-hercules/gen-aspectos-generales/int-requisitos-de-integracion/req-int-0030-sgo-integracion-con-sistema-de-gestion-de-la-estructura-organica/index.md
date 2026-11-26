# REQ-INT-0030-SGO - Integración con Sistema de gestión de la estructura orgánica

|  |  |
| --- | --- |
| Cod. REQ | **REQ-INT-0010-SGE - Integración con Sistema de gestión de la estructura orgánica** |
| Ver. Objetivo |  |
| Ver. REQ |  |
| Estado | IN PROGRESS |
| Fec. Aprobación |  |
| Épica, historia |  |
| Frecuencia |  |
| Características |  |

### Definición y objetivos

El SGI habilitará los mecanismos necesarios para la integración con los sistemas de información de gestión de la estructura orgánica (SGO). El objetivo de la integración es que los datos se gestionen una sola vez en el sistema donde, funcionalmente, se haya diseñado su gestión y que el SGI obtenga esta información sin necesidad de volver a gestionarla. El SGI podrá disponer o no de un repositorio o almacenamiento de algunas de las entidades gestionadas dentro de este sistema en los casos en los que la Universidad no disponga de información propia relativa a ellas.

La integración con los sistemas de gestión de la la estructura orgánica tiene por objetivo aportar al SGI los mecanismos que permitan tanto listar como consultar el detalle de ciertas entidades, que son consideradas de uso general por parte de varios módulos dentro del SGI y cuya única característica común es esta, el ser de uso general y no considerarse embebidas dentro de otros sistemas más específicos del SGI. Estas entidades serán las siguientes:

* Áreas de conocimiento
* Departamentos
* Clasificaciones (UNESCO, CNAE, NABS, ...)
* Geográficas (País, Comunidad Autónoma/Región, Provincia)

### Requisitos identificados

| Título | Épica, historia | Características | Cod. REQ | Estado | Fec. Aprobación | Frecuencia | M. Consumidor | Ver. Objetivo | Ver. REQ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [REQ-INT-0030-SGO-0101 - Consultar centro](req-int-0030-sgo-0101-consultar-centro.md) |  |  | **REQ-INT-0030-SGO-0101 - Consultar centro** | IN PROGRESS |  |  | CSP |  | 1.0.0 |
| [REQ-INT-0030-SGO-0100 - Listar centros](req-int-0030-sgo-0100-listar-centros.md) |  |  | **REQ-INT-0030-SGO-0100 - Listar centros** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0030-SGO-0090 - Dar de alta palabra clave](req-int-0030-sgo-0090-dar-de-alta-palabra-clave.md) |  |  | **REQ-INT-0030-SGO-0090 - Dar de alta palabra clave** | IN PROGRESS |  |  | CSP, PII |  | 1.0.0 |
| [REQ-INT-0030-SGO-0091 - Buscar palabras clave](req-int-0030-sgo-0091-buscar-palabras-clave.md) |  |  | **REQ-INT-0030-SGO-0091 - Buscar palabras clave** | IN PROGRESS |  |  | CSP, PII |  | 1.0.0 |
| [REQ-INT-0030-SGO-0031 - Consultar clasificación](req-int-0030-sgo-0031-consultar-clasificacion.md) |  |  | **REQ-INT-0030-SGO-0021** **- Consultar clasificación** | IN PROGRESS |  |  | CSP, PII |  | 1.0.0 |
| [REQ-INT-0030-SGO-0030 - Listar clasificaciones](req-int-0030-sgo-0030-listar-clasificaciones.md) |  |  | **REQ-INT-0030-SGO-0030** **- Listar clasificaciones** | IN PROGRESS |  |  | CSP, PII |  | 1.0.0 |
| [REQ-INT-0030-SGO-0080 - Listar provincias](req-int-0030-sgo-0080-listar-provincias.md) |  |  | **REQ-INT-0030-SGO-0080 - Listar provincias** | IN PROGRESS |  |  | ESB (Persona) |  | 1.0.0 |
| [REQ-INT-0030-SGO-0081 - Consultar provincia](req-int-0030-sgo-0081-consultar-provincia.md) |  |  | **REQ-INT-0030-SGO-0081 - Consultar provincia** | IN PROGRESS |  |  | CSP, PII, PRC |  | 1.0.0 |
| [REQ-INT-0030-SGO-0071 - Consultar comunidad autónoma](req-int-0030-sgo-0071-consultar-comunidad-autonoma.md) |  |  | **REQ-INT-0030-SGO-0071 - Consultar comunidad autónoma** | IN PROGRESS |  |  | CSP, PII, PRC |  | 1.0.0 |
| [REQ-INT-0030-SGO-0070 - Listar comunidades autónomas](req-int-0030-sgo-0070-listar-comunidades-autonomas.md) |  |  | **REQ-INT-0030-SGO-0070 - Listar comunidades autónomas** | IN PROGRESS |  |  | ESB (Persona) |  | 1.0.0 |
| [REQ-INT-0030-SGO-0061 - Consultar país](req-int-0030-sgo-0061-consultar-pais.md) |  |  | **REQ-INT-0030-SGO-0061 - Consultar país** | IN PROGRESS |  |  | CSP, PII, PRC |  | 1.0.0 |
| [REQ-INT-0030-SGO-0060 - Listar países](req-int-0030-sgo-0060-listar-paises.md) |  |  | **REQ-INT-0030-SGO-0060 - Listar países** | IN PROGRESS |  |  | ESB (Persona) |  | 1.0.0 |
| [REQ-INT-0030-SGO-0020 - Listar departamentos](req-int-0030-sgo-0020-listar-departamentos.md) |  |  | **REQ-INT-0030-SGO-0020 - Listar departamentos** | IN PROGRESS |  |  | ESB (Persona), PRC |  | 1.0.0 |
| [REQ-INT-0030-SGO-0011 - Consultar área de conocimiento](req-int-0030-sgo-0011-consultar-area-de-conocimiento.md) |  |  | **REQ-INT-0030-SGO-0011** **- Consultar área de conocimiento** | IN PROGRESS |  |  | CSP, ESB (Persona) |  | 1.0.0 |
| [REQ-INT-0030-SGO-0010 - Listar áreas de conocimiento](req-int-0030-sgo-0010-listar-areas-de-conocimiento.md) |  |  | **REQ-INT-0030-SGO-0010** **- Listar áreas de conocimiento** | IN PROGRESS |  |  | CSP, ESB (Persona) |  | 1.0.0 |