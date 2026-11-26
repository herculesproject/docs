# REQ-INT-0010-SGE-0082 - Consultar datos proyecto económico

|  |  |
| --- | --- |
| Cod. REQ | **REQ-INT-0010-SGE-0082 - Consultar datos proyecto económico** |
| Ver. Objetivo |  |
| Ver. REQ | 1.0.0 |
| Estado | IN PROGRESS |
| Fec. Aprobación |  |
| Épica, historia |  |
| Frecuencia |  |
| Características |  |
| M. Consumidor |  |

### Definición y objetivos

Obtener los datos de un proyecto económico a partir de su identificador de referencia en el SGI.

### Descripción integración

Parámetros de entrada:

* Identificador del proyecto económico (código de identificación del proyecto económico para intercambio de información entre ESB y SGI)

Salida: se devolverá un registro de un proyecto económico con la siguiente información:

* Identificador SGE
* Título del proyecto
* Fecha inicio
* Fecha fin
* Sector Iva

### Diseño técnico

En el siguiente enlace se muestra el diseño del modelo lógico y el diseño de la API del Sistema de Gestión Económica y, en concreto, de la relativa a proyectos del SGE y presupuestos: [SGI - ESB - SGE - Proyecto económico y presupuesto](../../../../../diseno/componentes/sgi-esb/sgi-esb-sge/sgi-esb-sge-proyecto-sge-y-presupuesto/index.md)

El servicio concreto del API que cubre este requisito es [SGI - ESB - SGE - Proyecto SGE y presupuesto - Consultar detalle de proyecto](../../../../../diseno/componentes/sgi-esb/sgi-esb-sge/sgi-esb-sge-proyecto-sge-y-presupuesto/sgi-esb-sge-proyecto-sge-y-presupuesto-servicios-basicos/sgi-esb-sge-proyecto-sge-y-presupuesto-consultar-detalle-de-proyecto.md).

### Interfaces de usuario relacionados

*(elemento de Confluence no migrado)*

### Informes relacionados

*(elemento de Confluence no migrado)*

### Casos de uso relacionados

*(elemento de Confluence no migrado)*