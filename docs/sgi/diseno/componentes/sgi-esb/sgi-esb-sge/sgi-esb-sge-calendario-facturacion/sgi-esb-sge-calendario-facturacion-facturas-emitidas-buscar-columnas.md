# SGI - ESB - SGE - Calendario facturación - Facturas emitidas - Buscar columnas

|  |  |
| --- | --- |
| Método | GET |
| URL | /facturas-emitidas/columnas |
| Parámetros | q+s (query + sort)  La query estará formada por:   * proyectoId * reducida * fechaFactura   El campo reducida puede tomar los siguientes valores:   * true: sólo se envían las columnas a mostrar en la pantalla principal * false:  se envían todas las columnas (para su exportación)   Si no esta informado el campo reducida se considera false. |
| Respuesta | Lista[Columna] |
| Descripción | Listado con las columnas que va a devolver la llamada /facturas-emitidas  Por cada columna se indica un id, nombre, si es una columna acumulable (se va a hacer una suma de ella en el SGI)  Ver el apartado "**Columnas Factura Emitida**" para ver que columnas se deben de mostrar. |

### Requisitos relacionados

*(elemento de Confluence no migrado)*