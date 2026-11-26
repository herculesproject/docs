# SGI - ESB - SGEPII - Buscar columnas gastos

|  |  |
| --- | --- |
| Método | GET |
| URL | /gastos-invencion/columnas |
| Parámetros | q+s (query + sort)  La query estará formada por:   * invencionId |
| Respuesta | Lista[[Columna](index.md#columna)] |
| Descripción | Listado con las columnas que va a devolver la llamada /gastos-invencion.  Por cada columna se indica un id, nombre, si es una columna acumulable (se puede manejar como un importe y hacer operaciones numéricas con ella en el SGI).  Por defecto, devolverá las siguientes columnas:   * Fecha * Referencia * Concepto * Tipo * Importe (acumulable = Sí SOLO para una de las columnas) |

### Requisitos relacionados

*(elemento de Confluence no migrado)*