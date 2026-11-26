# SGI - ESB - SGP - Personas - Consultar datos de vinculacion-categoría

|  |  |
| --- | --- |
| Método | GET |
| URL | /vinculaciones/persona/{id}/vinculaciones-categorias-profesionales |
| Parámetros | q+s (query + sort)  La query estará formada por:   * fechaObtencion * fechaFin |
| Respuesta | [VinculacionCategoriaProfesional](../index.md#vinculacioncategoriaprofesional) |
| Descripción | Si no se especifica ningún filtrado, deberá recuperar la categoría profesional a la que está asociada la persona y que sea vigente.  Para recuperar la vinculación activa a una **FECHA** determinada se generaría una consulta RSQL del tipo:   ``` q=fechaObtencion<=FECHA;fechaFin>=FECHA,fechaFin=na= ```   Devolver la **vinculación** asociada a la persona con identificador **{id}** donde el objeto que viene en la  **vinculacionCategoriaProfesional** de esa vinculación debe cumplir que su atributo **fechaObtencion** sea menor o igual que una **FECHA** dada y su atributo **fechaFin** sea mayor o igual que una **FECHA** dada o no debe tener valor.  Ver [UM - SGI - ESB - SGP - Adaptaciones integración](../../../../../guia-de-implantacion-checklist/um-universidad-de-murcia/sistema-de-gestion-de-investigacion-apis-integracion/sistema-de-gestion-de-personas-rrhh-um-sgi-esb-sgp/um-sgi-esb-sgp-adaptaciones-integracion.md) para su implementación en el SGI. |

### Requisitos relacionados

*(elemento de Confluence no migrado)*