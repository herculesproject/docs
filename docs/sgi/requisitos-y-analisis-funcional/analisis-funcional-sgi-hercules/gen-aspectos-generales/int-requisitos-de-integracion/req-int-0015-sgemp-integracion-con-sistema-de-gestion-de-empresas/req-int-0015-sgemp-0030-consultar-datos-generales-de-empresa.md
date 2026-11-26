# REQ-INT-0015-SGEMP-0030 - Consultar datos generales de empresa

|  |  |
| --- | --- |
| Cod. REQ | **REQ-INT-0015-SGEMP-0030 - Consultar datos generales de empresa** |
| Ver. Objetivo |  |
| Ver. REQ | 1.0.0 |
| Estado | IN PROGRESS |
| Fec. Aprobación |  |
| Épica, historia |  |
| Frecuencia |  |
| Características |  |
| M. Consumidor | ESB (Empresa), CSP, PII, RCL |

### Definición y objetivos

Obtener los datos generales de una empresa a partir de su identificador de referencia en el SGI. El ESB recibirá del SGI la solicitud de los datos generales de una determinada empresa. El ESB a través de la referencia de la empresa derivará la solicitud al sistema universitario correspondiente.

Descripción técnica

Parámetro de entrada: referencia de empresa (identificador de referencia entre SGI y ESB)

Salida: se devolverá un registro de una empresa con la siguiente información:

* Identificador/Referencia
* Nombre
* Tipo de identificador fiscal
* Número de identificación fiscal
* Razón social
* Indicador de si se trata de una empresa con datos económicos o no en la Universidad
* Identificador/Referencia de la entidad padre (en caso de que sea una subentidad)

### Diseño técnico

En el siguiente enlace se muestra el diseño del modelo lógico y el diseño de la API del Sistema de Gestión de Empresas y, en concreto, de los Servicios Básicos: [SGI - ESB - SGEMP - Servicios Básicos](../../../../../diseno/componentes/sgi-esb/sgi-esb-sgemp/sgi-esb-sgemp-servicios-basicos/index.md).

El servicio concreto del API que cubre este requisito es [SGI - ESB - SGEMP - Empresas - Consultar detalle (Datos generales)](../../../../../diseno/componentes/sgi-esb/sgi-esb-sgemp/sgi-esb-sgemp-servicios-basicos/sgi-esb-sgemp-empresas-consultar-detalle-datos-generales.md).

### Interfaces de usuario relacionados

*(elemento de Confluence no migrado)*

### Informes relacionados

*(elemento de Confluence no migrado)*

### Casos de uso relacionados

*(elemento de Confluence no migrado)*