# CU-CSP-0020 - Gestión de modelos de ejecución

|  |  |
| --- | --- |
| Cod. CU | **CU-CSP-0020 - Gestión de modelos de ejecución** |
| Ver. objetivo |  |
| Ver. CU | 1.0.0 |
| Estado | LIBERADO\_ |
| Fec. Aprobación |  |
| Épica, historia |  |
| Actores | ACT-CSP-004-Administrador |
| Frecuencia | Baja |

### Descripción

Agrupación de casos de uso que permitirá realizar la gestión de los modelos de ejecución [CSP - Modelo de ejecución](../../csp-modelo-de-ejecucion.md). Los modelos de ejecución definirán una categoría que permitirá la clasificación de las convocatorias y proyectos/contratos en función del mecanismo administrativo que ampara su realización. Es una tipología genérica que no implica la particularización de los campos de la convocatoria ni de su ciclo de gestión.

Ejemplo de listado de categorías: Ayudas y subvenciones, contrato, convenio.

### Actores

#### Actor principal

ACT-CSP-004-Administrador

#### Personal involucrado e intereses

Gestores (ACT-CSP-003-Gestor) de las unidades UGI, OTRI, OPE que requieren que al registrar una convocatoria o proyecto, los modelos de ejecución ya estén disponibles en el listado de categorización.

Personal investigador (ACT- CSP-001-Investigador, ACT-CSP-002-InvestigadorExterno) que requiere que se creen las convocatorias para presentar solicitudes sobre las mismas.

### Precondiciones

El usuario ACT-CSP-004-Administrador se autentica a través del usuario de dominio corporativo.

A través del servicio de integración con el directorio activo y de la información del usuario almacenada en el propio SGI, se obtiene su rol y las unidades de gestión sobre las que tiene disponible el rol. El usuario está autorizado sobre la funcionalidad asociada a esta operación.

Si bien no es imprescindible para todas las operaciones de gestión, sí debieran estar realizada la gestión de las siguientes entidades relacionadas:

* Tipos de fases CU-CSP-0005 - Gestión de tipos de fase
* Tipos de documentos (CU-CSP-0006 - Gestión de tipos de documentos)
* Tipos de enlaces  [CU-CSP-0007 - Gestión de tipos de enlace](../cu-csp-0007-gestion-de-tipos-de-enlace/index.md)
* Tipos de finalidad [CU-CSP-0008 - Gestión de tipos de finalidad](../cu-csp-0008-gestion-de-tipos-de-finalidad/index.md)
* Unidades de gestión (CU-USR-0020 - Gestión de "unidad de gestión")

### Garantías de éxito (postcondiciones)

Los modelos de ejecución se encuentran correctamente configurados y el personal ACT-CSP-003-Gestor puede disponer de los mismos para realizar la gestión de las convocatorias y proyectos.

### Listado de casos de uso

* [CU-CSP-0020-001 - Buscar y listar modelos de ejecución](cu-csp-0020-001-buscar-y-listar-modelos-de-ejecucion.md)
* [CU-CSP-0020-002 - Crear modelo de ejecución](cu-csp-0020-002-crear-modelo-de-ejecucion/index.md)
* [CU-CSP-0020-003 - Modificar modelo de ejecución](cu-csp-0020-003-modificar-modelo-de-ejecucion.md)
* [CU-CSP-0020-004 - Eliminar modelo de ejecución](cu-csp-0020-004-eliminar-modelo-de-ejecucion.md)

### Requisitos especiales

N/A

### Lista de tecnología y variaciones de datos

N/A