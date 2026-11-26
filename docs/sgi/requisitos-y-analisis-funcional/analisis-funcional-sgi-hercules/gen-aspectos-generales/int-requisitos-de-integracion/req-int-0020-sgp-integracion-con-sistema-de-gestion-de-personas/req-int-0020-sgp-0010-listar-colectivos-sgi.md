# REQ-INT-0020-SGP-0010 - Listar colectivos SGI

|  |  |
| --- | --- |
| Cod. REQ | **REQ-INT-0020-SGP-0010 - Listar colectivos SGI** |
| Ver. Objetivo |  |
| Ver. REQ | 1.0.0 |
| Estado | IN PROGRESS |
| Fec. Aprobación |  |
| Épica, historia |  |
| Frecuencia |  |
| Características |  |
| M. Consumidor |  |

### Definición y objetivos

Recuperar colectivos de personal de la Universidad que pueden ejercer como miembros de los equipos de proyecto o trabajo de los proyectos/contratos del SGI (IU-CSP-0100 - Gestión de roles de equipo de proyecto).

Los roles de los equipos de proyecto serán configurables para cada implantación del SGI. Para cada uno de los roles se debe de especificar a qué colectivos del personal universitario va a estar vinculado. Ver  CSP - Solicitudes - Gestión de roles de equipo de proyecto.

El ESB-SGP proporcionará al SGI el listado de colectivos. La obtención de este listado de colectivos podrá:

* Provenir de los servicios de integración proporcionados por algún sistema corporativo universitario.
* Estar simplemente recogida como un listado en el ESB que se defina en el periodo de implantación del SGI.

### Descripción integración

Parámetros de entrada: sin parámetros de entrada.

Parámetros de salida: listado de colectivos vigentes:

* Identificador del colectivo
* Nombre de colectivo

El listado devuelto será presentado al usuario, por norma general, en un componente selector (combo).

### Diseño técnico

En el siguiente enlace se muestra el diseño del modelo lógico y el diseño de la API del Sistema de Gestión de Personas y, en concreto, de los Servicios Básicos: [SGI - ESB - SGP - Servicios Básicos](../../../../../diseno/componentes/sgi-esb/sgi-esb-sgp/sgi-esb-sgp-servicios-basicos/index.md).

El servicio concreto del API que cubre este requisito es [SGI - ESB - SGP - Colectivos - Listar](../../../../../diseno/componentes/sgi-esb/sgi-esb-sgp/sgi-esb-sgp-servicios-basicos/sgi-esb-sgp-colectivos-listar.md).

### Interfaces de usuario relacionados

*(elemento de Confluence no migrado)*

### Informes relacionados

*(elemento de Confluence no migrado)*

### Casos de uso relacionados

*(elemento de Confluence no migrado)*