# REQ-INT-0060-EDMA-CVN-0001 - Autorizaciones modificadas

|  |  |
| --- | --- |
| Cod. REQ | **REQ-INT-0060-EDMA-CVN-0001 - Autorizaciones modificadas** |
| Ver. Objetivo |  |
| Ver. REQ | 1.0.0 |
| Estado | IN PROGRESS |
| Fec. Aprobación |  |
| Épica, historia |  |
| Frecuencia |  |
| Características |  |
| M. Consumidor |  |

### Definición y objetivos

El SGI deberá disponer de una función que permita al módulo de CVN (parte del sistema EDMA) consultar las solicitudes de participación en proyectos europeos autorizadas desde una fecha dada. El módulo de CVN utilizará este listado para mostrarlo al personal investigador en el momento de registrar un nuevo proyecto/contrato en su CVN. Además, el módulo de CVN, deberá remitir posteriormente al SGI el nuevo proyecto registrado vinculado a la autorización seleccionada ([REQ-INT-0060-EDMA-CVN-0002 - Notificaciones proyectos CVN](req-int-0060-edma-cvn-0002-notificaciones-proyectos-cvn.md)).

### Descripción integración

Parámetros de entrada:

* Fecha. Es la fecha que debe considerar el SGI para filtrar las solicitudes de autorización a remitir a CVN: serán todas las solicitudes de autorización cuyo estado actual sea "autorizada" y la fecha de dicho estado sea igual o superior a la fecha recibida como parámetro de entrada.

Parámetros de salida:

* Listado de Identificadores de la solicitud de autorización.

### Diseño técnico

En el siguiente enlace se muestra el diseño del modelo lógico y el diseño de la API del SGI para la gestión de autorizaciones y proyectos externos [ESB - SGI - Autorizaciones y notificaciones Proyectos externos](../../../../../diseno/componentes/sgi-esb/esb-sgi/esb-sgi-autorizaciones-y-notificaciones-proyectos-externos/index.md).

El servicio concreto del API que cubre este requisito es [ESB - SGI - Autorizaciones - Consultar autorizaciones modificadas](../../../../../diseno/componentes/sgi-esb/esb-sgi/esb-sgi-autorizaciones-y-notificaciones-proyectos-externos/esb-sgi-autorizaciones-consultar-autorizaciones-modificadas.md).

### Interfaces de  usuario relacionados

*(elemento de Confluence no migrado)*

### Informes relacionados

*(elemento de Confluence no migrado)*

### Casos de uso relacionados

*(elemento de Confluence no migrado)*