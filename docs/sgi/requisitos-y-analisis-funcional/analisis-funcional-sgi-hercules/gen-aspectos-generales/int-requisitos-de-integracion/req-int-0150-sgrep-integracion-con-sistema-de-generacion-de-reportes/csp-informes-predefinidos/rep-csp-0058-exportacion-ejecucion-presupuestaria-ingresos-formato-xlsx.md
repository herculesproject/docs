# REP-CSP-0058 - Exportación Ejecución presupuestaria - Ingresos- Formato xlsx

|  |  |
| --- | --- |
| Cod. REP | ********REP-CSP-0058 - Exportación Ejecución presupuestaria - Ingresos - Formato xlsx******** |
| Ver. Objetivo |  |
| Ver. REP | 1.0.0 |
| Estado |  |
| Fec. Aprobación |  |
| Épica, historia |  |
| Frecuencia |  |

### Diseño Informe

Se debe de generar un informe en formato xlsx.

Los datos a mostrar deberán obtenerse a partir de integración con el SGE, incluyendo todas las columnas devueltas por el servicio de integración [REQ-INT-0010-SGE-0132 - Buscar ejecución presupuestaria - ingresos](../../req-int-0010-sge-integracion-con-sistema-de-gestion-economica/req-int-0010-sge-0132-buscar-ejecucion-presupuestaria-ingresos.md). Los parámetros de entrada al servicio se corresponderán con los recogidos en el formulario desde el que se invoca a este informe.  Cada fila del informe será un registro devuelto por el servicio y cada columna un campo de cada registro.

### Permisos

|  |  |
| --- | --- |
| ACT-CSP-003-Gestor | CSP-EJEC-E, CSP-EJEC-E\_UO |
| ACT-CSP-004-Administrador | CSP-EJEC-E, CSP-EJEC-E\_UO |
| ACT-CSP-005-Visor | CSP-EJEC-V, CSP-EJEC-V\_UO |

### Interfaces de usuario relacionados

*(elemento de Confluence no migrado)*

### Casos de uso relacionados

*(elemento de Confluence no migrado)*