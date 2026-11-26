# SGI - ESB - SGEMP - Servicios Básicos

##### Métodos imprescindibles para el funcionamiento de los módulos y gestiones que utilicen empresas.

| Servicio | Método | URL | Parámetros | Respuesta | Descripción |
| --- | --- | --- | --- | --- | --- |
| [SGI - ESB - SGEMP - Empresas - Consultar detalle (Datos generales)](sgi-esb-sgemp-empresas-consultar-detalle-datos-generales.md) | GET | /empresas/{id} |  | [Empresa](../index.md#empresa) | Detalle de los datos generales de una empresa. |
| [SGI - ESB - SGEMP - Empresas - Buscar](sgi-esb-sgemp-empresas-buscar.md) | GET | /empresas | q+s (query + sort)  La query estará formada por:   * id * nombre * razonSocial * numeroIdentificacion | Lista[[Empresa](../index.md#empresa)] | Listado de Empresa.  *Ejemplo*:  nombre=like=(Tree);(razonSocial=like=SL) |
| [SGI - ESB - SGEMP - Empresas - Consultar datos contacto](sgi-esb-sgemp-empresas-consultar-datos-contacto.md) | GET | /datos-contacto/empresa/{id} |  | [DatosContacto](../index.md#datoscontacto) | Contiene los datos de contacto de una empresa. |
| [SGI - ESB - SGEMP - Empresas - Listar tipos de identificador](sgi-esb-sgemp-empresas-listar-tipos-de-identificador.md) | GET | /tipos-identificador |  | Lista[[TipoIdentificador](../index.md#tipoidentificador)] | Listado de tipos de identificador fiscal para las empresas ordenados alfabéticamente de forma ascendente. |