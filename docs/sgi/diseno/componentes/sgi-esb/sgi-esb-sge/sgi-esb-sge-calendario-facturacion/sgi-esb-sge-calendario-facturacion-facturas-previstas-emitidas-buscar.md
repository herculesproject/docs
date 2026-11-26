# SGI - ESB - SGE - Calendario facturación - Facturas previstas emitidas - Buscar

|  |  |
| --- | --- |
| Método | GET |
| URL | /facturas-previstas-emitidas |
| Parámetros | q+s (query + sort)  La query estará formada por:   * proyectoIdSGI * numeroPrevision * numeroFactura   proyectoIdSGI: identificador del proyecto en el SGI |
| Respuesta | Lista[FacturaPrevistaEmitida] |
| Descripción | Listado con las facturas emitidas del SGE. Por cada factura emitida se devolverán los siguientes campos:   * Identificador de la factura emitida * Identificador del proyecto SGI * Número factura * Número previsión |

### Requisitos relacionados

*(elemento de Confluence no migrado)*