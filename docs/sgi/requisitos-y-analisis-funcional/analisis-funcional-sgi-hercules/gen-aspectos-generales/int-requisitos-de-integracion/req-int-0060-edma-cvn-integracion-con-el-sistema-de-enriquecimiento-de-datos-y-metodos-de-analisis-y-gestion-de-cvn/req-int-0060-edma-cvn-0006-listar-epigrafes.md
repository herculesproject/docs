# REQ-INT-0060-EDMA-CVN-0006 - Listar epígrafes

|  |  |
| --- | --- |
| Cod. REQ | **REQ-INT-0060-EDMA-CVN-0006 - Listar Epígrafes** |
| Ver. Objetivo |  |
| Ver. REQ | 1.0.0 |
| Estado | IN PROGRESS |
| Fec. Aprobación |  |
| Épica, historia |  |
| Frecuencia |  |
| Características |  |
| M. Consumidor |  |

### Definición y objetivos

El SGI deberá disponer de una función que permita al módulo de CVN (parte del sistema EDMA) consultar los códigos de los apartados del CVN que forman parte de la Producción científica y que necesitan validación. Se enviarán los epígrafes marcados en el SGI de la última convocatoria creada. Por cada epígrafe se enviarán los campos dinámicos del CVN que se tienen que enviar a PRC. Será un subconjunto de los de la Fecyt.

### Descripción integración

Parámetros de entrada:

* No tiene

Parámetros de salida:

* Listado de Epígrafes CVN. Cada epígrafe CVN estará formado por un código de uno de lo apartados del CVN que forman parte de la Producción científica y que necesita validación y por una lista de códigos de campos del epígrafe CVN.

### Diseño técnico

En el siguiente enlace se muestra el diseño del modelo lógico y el diseño de la API del SGI para la gestión de la producción científica [ESB - SGI - Producción Científica](../../../../../diseno/componentes/sgi-esb/esb-sgi/esb-sgi-produccion-cientifica/index.md).

El servicio concreto del API que cubre este requisito es [ESB - SGI - Producción científica - Listar epígrafes](../../../../../diseno/componentes/sgi-esb/esb-sgi/esb-sgi-produccion-cientifica/esb-sgi-produccion-cientifica-listar-epigrafes.md).

### Interfaces de usuario relacionados

*(elemento de Confluence no migrado)*

### Informes relacionados

*(elemento de Confluence no migrado)*

### Casos de uso relacionados

*(elemento de Confluence no migrado)*