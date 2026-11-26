# REQ-INT-0100-SGDOC-0010 - Añadir-modificar documento

|  |  |
| --- | --- |
| Cod. REQ | **REQ-INT-0100-SGDOC-0010 Añadir documento** |
| Ver. Objetivo |  |
| Ver. REQ | 1.0.0 |
| Estado |  |
| Fec. Aprobación |  |
| Épica, historia |  |
| Frecuencia |  |
| Características |  |
| M. Consumidor |  |

### Definición y objetivos

Añadir un documento al Sistema de Gestión Documental.

### Descripción técnica integración

Parámetros de entrada:

* Documento binario.

Parámetros de salida:  se devolverá un registro del documento recién añadido con la siguiente información:

* Número de documento.
* Nombre.
* Versión.
* Fecha de creación.
* Tipo de archivo.
* Identificador del autor del documento.
* Hash del documento.

### Diseño técnico

En el siguiente enlace se muestra el diseño del modelo lógico y el diseño de la API del Sistema de Gestión Documental [SGI - ESB - SGDOC](../../../../../diseno/componentes/sgi-esb/sgi-esb-sgdoc/index.md).

El servicio del API que cubre este requisito es [ESB - SGI - Documentos - Dar de alta](../../../../../diseno/componentes/sgi-esb/sgi-esb-sgdoc/esb-sgi-documentos-dar-de-alta.md).

### Interfaces de usuario relacionados

*(elemento de Confluence no migrado)*

### Casos de uso relacionados

*(elemento de Confluence no migrado)*