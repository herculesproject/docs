# CU-COM-0010 - Generar comunicado de envío inmediato

|  |  |
| --- | --- |
| Cod. CU | **CU-COM-0010 - Generar comunicado de envío inmediato** |
| Ver. objetivo | 1.0.0 |
| Ver. CU | 1.0.0 |
| Estado | LIBERADO\_ |
| Fec. Aprobación |  |
| Épica, historia | [HERCULES-2367](https://jira.um.es/browse/HERCULES-2367?src=confmacro) - Jira issue doesn't exist or you don't have permission to view it. |
| Actores |  |
| Frecuencia | Media |

### Descripción

El sistema SGI debe poder generar comunicados en el mismo momento que ocurre un evento para que los usuarios puedan recibirlos.

### Actores

Los emisores de comunicados concretos de cada módulo/gestión.

### Precondiciones

Para el envío/recepción de un comunicado inmediato, que siempre será por email, deben cumplirse una serie de condiciones:

* el comunicado ha de disponer de una plantilla de asunto y contenido por defecto configurada en el SGI.
* el comunicado ha de disponer de una lista de destinatarios por defecto, por unidad de gestión, para ese tipo de comunicado.
* el usuario o usuarios destinatarios de los mismos debe disponer de un email operativo y, en el caso de que el destinatario sea una persona del SGP con el que el SGI se integra, que este email esté marcado como "principal".

### Garantías de éxito (postcondiciones)

Los destinatarios del comunicado reciben el comunicado por email de manera inmediatamente posterior a la ocurrencia del evento que lo origina.

### Escenario principal (flujo básico) - Envío de comunicado

1. Dentro de la gestión que corresponda se necesita enviar un comunicado a un destinatario o lista de destinatarios concreta de manera "inmediata" tras el momento en que se produce el evento que lo dispara.
2. El módulo que origina la necesidad del  del comunicado (CSP, ETI, PII) genera el email a enviar en el módulo de comunicados, enviando además los parámetros necesarios para que se sustituyan dentro de la plantilla de este tipo de comunicado.
3. El módulo de comunicados registra los datos del comunicado y lo envía a los destinatarios indicados.

### Escenario principal (flujo alternativo 1) - Fallo en el proceso de envío de comunicado

1. Dentro de la gestión que corresponda se necesita enviar un comunicado a un destinatario o lista de destinatarios concreta de manera "inmediata" tras el momento en que se produce el evento que lo dispara.
2. El módulo que origina la necesidad del comunicado (CSP, ETI, PII) registra un email a enviar en el módulo de comunicados, enviando además los parámetros necesarios para que se sustituyan dentro de la plantilla de este tipo de comunicado.
3. El registro del email falla.
4. Se deja registro del error en los log y se hace rollback en el módulo invocante (CSP,ETI,PII) si es que el propio envío del email altera datos en esos módulos, esto es, no se registrará una entrada en la tabla que asocia una entidad de esos módulos con el email, ya que no se ha podido generar. En ningún caso se dejará de realizar el "guardado" o "aplicación" de los posibles cambios que disparan el envío del comunicado en las entidades del módulo invocante  (CSP,ETI,PII) porque no se pueda enviar el email. Por ejemplo, no se dejará de guardar un cambio de estado de la solicitud porque no se pueda enviar el email de aviso de que se ha producido este evento.

### Casos de uso relacionados

Manual

* [CU-CSP-1100 -002- Modificar solicitud - Cambio de estado](../../../csp-modulo-de-convocatorias-ayudas-solicitudes-proyectos-y-contratos-y-grupos-de-investigacion/csp-casos-de-uso/cu-csp-1100-gestion-de-solicitudes/cu-csp-1100-002-modificar-solicitud-cambio-de-estado.md "CU-CSP-1100 -002- Modificar solicitud - Cambio de estado") —
* [CU-ETI-0010-008 - Envío notificación convocatoria](../../../eti-modulo-de-etica/eti-casos-de-uso/cu-eti-0010-gestion-convocatorias-reunion/cu-eti-0010-008-envio-notificacion-convocatoria.md) —
* [CU-ETI-0020-002 - Evaluar memoria - Guardar sin comentarios](../../../eti-modulo-de-etica/eti-casos-de-uso/cu-eti-0020-gestion-de-evaluaciones/cu-eti-0020-002-evaluar-memoria-guardar-sin-comentarios.md "CU-ETI-0020-002 - Evaluar memoria - Guardar sin comentarios") —
* [CU-ETI-0020-003 - Evaluar memoria - Guardar con comentarios](../../../eti-modulo-de-etica/eti-casos-de-uso/cu-eti-0020-gestion-de-evaluaciones/cu-eti-0020-003-evaluar-memoria-guardar-con-comentarios.md "CU-ETI-0020-003 - Evaluar memoria - Guardar con comentarios") —
* [CU-ETI-0060-005 - Enviar a secretaría](../../../eti-modulo-de-etica/eti-casos-de-uso/cu-eti-0060-peticiones-de-evaluacion-investigador/cu-eti-0060-005-enviar-a-secretaria.md) —
* [CU-ETI-0070 - Procesos batch](../../../eti-modulo-de-etica/eti-casos-de-uso/cu-eti-0070-procesos-batch.md "CU-ETI-0070 - Procesos batch") —
* [CU-ETI-0090-002 - Evaluar memoria seguimiento - Guardar sin comentarios](../../../eti-modulo-de-etica/eti-casos-de-uso/cu-eti-0090-gestion-de-seguimientos/cu-eti-0090-002-evaluar-memoria-seguimiento-guardar-sin-comentarios.md "CU-ETI-0090-002 - Evaluar memoria seguimiento - Guardar sin comentarios") —
* [CU-ETI-0090-003 - Evaluar memoria seguimiento - Guardar con comentarios](../../../eti-modulo-de-etica/eti-casos-de-uso/cu-eti-0090-gestion-de-seguimientos/cu-eti-0090-003-evaluar-memoria-seguimiento-guardar-con-comentarios.md "CU-ETI-0090-003 - Evaluar memoria seguimiento - Guardar con comentarios") —
* CU-PII-0010-002 - Solicitudes de protección - Avisos —

Auto

*(elemento de Confluence no migrado)*

### Interfaces relacionados

Manual

* [IU-CSP-0204-008 - Modificar convocatoria - Hitos](../../../csp-modulo-de-convocatorias-ayudas-solicitudes-proyectos-y-contratos-y-grupos-de-investigacion/csp-interfaz-de-usuario/iu-csp-0200-gestion-de-convocatorias/iu-csp-0204-modificar-convocatoria/iu-csp-0204-008-modificar-convocatoria-hitos.md "IU-CSP-0204-008 - Modificar convocatoria - Hitos") —
* IU-CSP-0302-017 - Añadir-modificar hito —
* [CSP Proyectos, contratos, becas y ayudas](../../../csp-modulo-de-convocatorias-ayudas-solicitudes-proyectos-y-contratos-y-grupos-de-investigacion/csp-proyectos-contratos-becas-y-ayudas.md) --
* IU-CSP-0304-005 - Modificar Solicitud - Modificar Hitos - Unidades de gestión —
* IU-CSP-0402-009 - Añadir-modificar fase —
* IU-CSP-0402-010 - Añadir-modificar hito —
* [IU-CSP-202-009 - Añadir hito a convocatoria](../../../csp-modulo-de-convocatorias-ayudas-solicitudes-proyectos-y-contratos-y-grupos-de-investigacion/csp-interfaz-de-usuario/iu-csp-0200-gestion-de-convocatorias/iu-csp-202-009-anadir-hito-a-convocatoria.md) —
* [IU-ETI-0030-001 Búsqueda y listado de actas](../../../eti-modulo-de-etica/eti-interfaz-de-usuario/iu-eti-0030-gestion-de-actas/iu-eti-0030-001-busqueda-y-listado-de-actas.md) —

Auto

*(elemento de Confluence no migrado)*