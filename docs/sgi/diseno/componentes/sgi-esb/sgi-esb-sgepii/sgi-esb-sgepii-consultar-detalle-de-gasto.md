# SGI - ESB - SGEPII - Consultar detalle de gasto

|  |  |
| --- | --- |
| Método | GET |
| URL | /gastos-invencion/{id} |
| Parámetros | q+s (query + sort)  La query estará formada por:   * invencionId * tipoOperacion   El tipo de operación puede tomar los siguientes valores:   * GAS (Ejecución económica - Gastos) * REP (Ejecución económica - Repartos - Gastos a deducir) |
| Respuesta | [DatoEconomicoDetalle](index.md#datoeconomicodetalle) |
| Descripción | Detalle de un gasto.  Para cada gasto se devolverán los siguientes datos:   * Identificador del gasto. * Listado de documentos (identificador, nombre del documento y nombre del fichero, sin el contenido). |

### Requisitos relacionados

*(elemento de Confluence no migrado)*