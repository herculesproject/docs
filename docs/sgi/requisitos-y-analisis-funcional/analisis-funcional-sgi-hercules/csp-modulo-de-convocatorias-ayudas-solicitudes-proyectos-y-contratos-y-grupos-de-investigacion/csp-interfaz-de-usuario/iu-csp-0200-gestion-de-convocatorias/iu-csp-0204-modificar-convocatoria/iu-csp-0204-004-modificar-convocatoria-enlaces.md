# IU-CSP-0204-004 - Modificar convocatoria - Enlaces

|  |  |
| --- | --- |
| Cod. IU | ********IU-CSP-0204-002 - Modificar convocatoria - Enlaces******** |
| Ver. objetivo |  |
| Ver. IU | 1.0.0 |
| Estado | LIBERADO\_ |
| Fec. Aprobación |  |
| Épica, historia |  |
| Actores | ACT-CSP-004-Administrador, ACT-CSP-003-Gestor |
| Frecuencia | Media |

## Formulario Modificar convocatoria - Enlaces

### Formulario con el listado de enlaces

**La modificación de los datos de una convocatoria se rige por lo establecido en [CU-CSP-1000-001 - Modificar convocatoria](../../../csp-casos-de-uso/cu-csp-1000-gestion-de-convocatorias/cu-csp-1000-001-modificar-convocatoria.md)**

|  |  |  |
| --- | --- | --- |
|  | | |
| Nombre | Tipo | Características / Notas |
| **La modificación de los datos de una convocatoria se rige por lo establecido en [CU-CSP-1000-001 - Modificar convocatoria](../../../csp-casos-de-uso/cu-csp-1000-gestion-de-convocatorias/cu-csp-1000-001-modificar-convocatoria.md)** | | |
| Listado de enlaces de la convocatoria | | |
| URL | Texto | Dirección url del enlace |
| Descripción | Texto largo | Descripción del enlace |
| Tipo de enlace | Texto corto | Tipo de enlace |
| Modificar | Icono de acción | Acción modificar |
| Eliminar | Icono de acción | Acción eliminar |

| Acciones | Descripción | Enlace CU. | Permisos |
| --- | --- | --- | --- |
| Modificar | Muestra la pantalla de modificación de la url seleccionada del listado de enlaces de la convocatoria | Muestra la pantalla de abajo de "Modificar enlace de la convocatoria".  Ver detalle en documentación asociada en [CU-CSP-1000-001 - Modificar convocatoria](../../../csp-casos-de-uso/cu-csp-1000-gestion-de-convocatorias/cu-csp-1000-001-modificar-convocatoria.md). | CSP-CON-E  CSP-CON-E\_UO |
| Eliminar | Elimina el enlace | Elimina el registro de la tabla de Enlaces de la convocatoria. | CSP-CON-E  CSP-CON-E\_UO |
| Paginación | Componente estándar de paginación sobre la tabla de lista de resultados. |  |  |
| Añadir nuevo enlace | Muestra la pantalla de Nuevo enlace | Muestra la pantalla [IU-CSP-202-005 - Añadir enlace](../iu-csp-202-005-anadir-enlace.md). | CSP-CON-E  CSP-CON-E\_UO |

### Formulario para modificar los enlaces de una convocatoria.

|  |  |  |
| --- | --- | --- |
|  | | |
| Nombre | Tipo | Características / Notas |
| **La modificación de los datos de una convocatoria se rige por lo establecido en [CU-CSP-1000-001 - Modificar convocatoria](../../../csp-casos-de-uso/cu-csp-1000-gestion-de-convocatorias/cu-csp-1000-001-modificar-convocatoria.md)** | | |
| URL | Texto  Obligatorio | Dirección url del enlace |
| Descripción | Texto largo  Opcional | Descripción del enlace |
| Tipo de enlace | Selector  Texto corto  Opcional | Tipo de enlace |

| Acciones | Descripción | Enlace CU. | Permisos |
| --- | --- | --- | --- |
| Guardar | Actualiza el registro en base de datos | Se realizarán las comprobaciones de tipo y de unicidad sobre el campo URL.  Se guardarán los cambios modificando los datos del enlace de la convocatoria en base de datos.  Ver detalle en documentación asociada en [CU-CSP-1000-001 - Modificar convocatoria](../../../csp-casos-de-uso/cu-csp-1000-gestion-de-convocatorias/cu-csp-1000-001-modificar-convocatoria.md). | CSP-CON-E  CSP-CON-E\_UO |
| Cancelar | No realiza ninguna operación en base de datos | No se tendrán en cuenta los cambios indicados en el formulario y se volverá al listado de enlaces de la convocatoria |  |

### Permisos de acceso a la pantalla

#### Por actor

|  |  |
| --- | --- |
| ACT-CSP-004-Administrador | CSP-CON-E, CSP-CON-E\_UO |
| ACT-CSP-003-Gestor | CSP-CON-E, CSP-CON-E\_UO |

#### Todos los permisos de acceso

|  |  |
| --- | --- |
| Permisos | CSP-CON-V, CSP-CON-V\_UO, CSP-CON-E, CSP-CON-E\_UO |

Se aplican las mismas restricciones para todos los elementos del árbol de navegación bajo este path.