# REQ-INT-0010-SGE - Integración con Sistema de gestión económica

|  |  |
| --- | --- |
| Cod. REQ | **REQ-INT-0010-SGE - Integración con Sistema de gestión económica** |
| Ver. Objetivo |  |
| Ver. REQ |  |
| Estado | IN PROGRESS |
| Fec. Aprobación |  |
| Épica, historia |  |
| Frecuencia |  |
| Características |  |

### Definición y objetivos

El SGI a través del ESB habilitará los mecanismos necesarios para la integración con el sistema de gestión económica de la Universidad. El  objetivo de la integración, aparte del cumplimiento del paradigma de dato único, es aislar al SGI del proceso contable y financiario que, dada su complejidad y transversalidad institucional, debe mantenerse centralizado y normalizado en el sistema de gestión económica (SGE) correspondiente.

La gestión de todos los datos económicos de los proyectos/contratos/convenios/registro de PII, etc. se realizará en el SGE. El SGI actuará como sistema lector de los datos económicos expuestos por el SGE. Los datos económicos que estarán disponibles en el SGI dependerán del detalle ofrecido por el SGE.

A grandes rasgos el objetivo de esta integración será:

* Recuperar el detalle de las entidades que, bajo un rol u otro, participan en las actividades de investigación registradas en el SGI (entidades financiadoras, socios colaboradores, etc.).
* Recuperar el resumen del estado económico de los proyectos, contratos, etc. de investigación agrupados por partidas presupuestarias y/o conceptos de gasto
* Recuperar el detalle de facturas y gastos de los proyectos, contratos, etc. de investigación.
* Recuperar el listado de tipos o códigos de gasto

### Requisitos identificados

| Título | Épica, historia | Características | Cod. REQ | Estado | Fec. Aprobación | Frecuencia | M. Consumidor | Ver. Objetivo | Ver. REQ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [REQ-INT-0010-SGE-0150 - Buscar facturas emitidas](req-int-0010-sge-0150-buscar-facturas-emitidas.md) |  |  | **REQ-INT-0010-SGE-0150 - Buscar facturas emitidas** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0166 - Detalle gasto justificado](req-int-0010-sge-0166-detalle-gasto-justificado.md) |  |  | **REQ-INT-0010-SGE-0166 - Detalle gasto justificado** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0166 - Buscar gastos justificados](req-int-0010-sge-0166-buscar-gastos-justificados.md) |  |  | **REQ-INT-0010-SGE-0166 - Buscar gastos justificados** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0100 - Buscar gastos pendientes de contabilización](req-int-0010-sge-0100-buscar-gastos-pendientes-de-contabilizacion.md) |  |  | **REQ-INT-0010-SGE-0100 - Buscar gastos pendientes de contabilización** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0090 - Notificar presupuesto de proyecto económico](req-int-0010-sge-0090-notificar-presupuesto-de-proyecto-economico.md) |  |  | **REQ-INT-0010-SGE-090 - Notificar presupuesto de proyecto económico** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0013-SGEPII-0011 - Detalle gasto](../req-int-0013-sgepii-integracion-con-sistema-de-gestion-economica-de-proteccion-industrial-e-intelectual/req-int-0013-sgepii-0011-detalle-gasto.md) |  |  | **REQ-INT-0013-SGEPII-0011 - Detalle gasto** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0142 - Detalle personal contratado](req-int-0010-sge-0142-detalle-personal-contratado.md) |  |  | **REQ-INT-0010-SGE-0142 - Detalle personal contratado** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0141 - Detalle viaje-dieta](req-int-0010-sge-0141-detalle-viaje-dieta.md) |  |  | **REQ-INT-0010-SGE-0141 - Detalle viaje-dieta** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0140 - Detalle justificante-factura](req-int-0010-sge-0140-detalle-justificante-factura.md) |  |  | **REQ-INT-0010-SGE-0140 - Detalle justificante-factura** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0139 - Buscar detalle de operaciones - Modificaciones](req-int-0010-sge-0139-buscar-detalle-de-operaciones-modificaciones.md) |  |  | **REQ-INT-0010-SGE-0139 - Buscar detalle de operaciones - Modificaciones** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0138 - Buscar detalle de operaciones - Ingresos](req-int-0010-sge-0138-buscar-detalle-de-operaciones-ingresos.md) |  |  | **REQ-INT-0010-SGE-0138 - Buscar detalle de operaciones - Ingresos** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0137 - Buscar detalle de operaciones - Gastos](req-int-0010-sge-0137-buscar-detalle-de-operaciones-gastos.md) |  |  | **REQ-INT-0010-SGE-0137 - Buscar detalle de operaciones - Gastos** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0136 - Buscar justificantes y facturas - Personal contratado](req-int-0010-sge-0136-buscar-justificantes-y-facturas-personal-contratado.md) |  |  | **REQ-INT-0010-SGE-0136 - Buscar justificantes y facturas - Personal contratado** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0135 - Buscar justificantes y facturas - Viajes y dietas](req-int-0010-sge-0135-buscar-justificantes-y-facturas-viajes-y-dietas.md) |  |  | **REQ-INT-0010-SGE-0135 - Buscar justificantes y facturas - Viajes y Dietas** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0134 - Buscar justificantes y facturas - Facturas y gastos](req-int-0010-sge-0134-buscar-justificantes-y-facturas-facturas-y-gastos.md) |  |  | **REQ-INT-0010-SGE-0130 - Buscar justificantes y facturas - Facturas y gastos** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0132 - Buscar ejecución presupuestaria - ingresos](req-int-0010-sge-0132-buscar-ejecucion-presupuestaria-ingresos.md) |  |  | **REQ-INT-0010-SGE-0132 - Buscar ejecución presupuestaria - ingresos** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0131 - Buscar ejecución presupuestaria - gastos](req-int-0010-sge-0131-buscar-ejecucion-presupuestaria-gastos.md) |  |  | **REQ-INT-0010-SGE-0131 - Buscar ejecución presupuestaria - gastos** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0130 - Buscar ejecución presupuestaria - estado actual](req-int-0010-sge-0130-buscar-ejecucion-presupuestaria-estado-actual.md) |  |  | **REQ-INT-0010-SGE-0130 - Buscar ejecución presupuestaria - estado actual** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0103 - Detalle gasto](req-int-0010-sge-0103-detalle-gasto.md) |  |  | **REQ-INT-0010-SGE-0103 - Detalle gasto** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0102 - Rechazar gasto](req-int-0010-sge-0102-rechazar-gasto.md) |  |  | **REQ-INT-0010-SGE-0102 - Rechazar gasto** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0101 - Validar gasto](req-int-0010-sge-0101-validar-gasto.md) |  |  | **REQ-INT-0010-SGE-0101 - Validar gasto** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0104 - Descargar Binario documento](req-int-0010-sge-0104-descargar-binario-documento.md) |  |  | **REQ-INT-0010-SGE-0104 - Descargar Binario documento** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0083 - Solicitar relación con un proyecto económico](req-int-0010-sge-0083-solicitar-relacion-con-un-proyecto-economico.md) |  |  | **REQ-INT-0010-SGE-0083 - Solicitar relación con un  proyecto económico** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0161 - Modificar periodo amortización](req-int-0010-sge-0161-modificar-periodo-amortizacion.md) |  |  | **REQ-INT-0010-SGE-0161 - Modificar periodo amortización** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0160 - Crear periodo amortización](req-int-0010-sge-0160-crear-periodo-amortizacion.md) |  |  | **REQ-INT-0010-SGE-0160 - Crear periodo amortización** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0153 - Buscar facturas previstas emitidas](req-int-0010-sge-0153-buscar-facturas-previstas-emitidas.md) |  |  | **REQ-INT-0010-SGE-0153 - Buscar facturas previstas emitidas** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0151 - Detalle factura emitida](req-int-0010-sge-0151-detalle-factura-emitida.md) |  |  | **REQ-INT-0010-SGE-0151 - Detalle factura emitida** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0081 - Solicitar alta proyecto económico](req-int-0010-sge-0081-solicitar-alta-proyecto-economico.md) |  |  | **REQ-INT-0010-SGE-0081 - Solicitar alta proyecto económico** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0082 - Consultar datos proyecto económico](req-int-0010-sge-0082-consultar-datos-proyecto-economico.md) |  |  | **REQ-INT-0010-SGE-0082 - Consultar datos proyecto económico** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0080 - Buscar proyecto económico](req-int-0010-sge-0080-buscar-proyecto-economico.md) |  |  | **REQ-INT-0010-SGE-0080 - Buscar proyecto económico** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0073 - Detalle código económico ingreso](req-int-0010-sge-0073-detalle-codigo-economico-ingreso.md) |  |  | **REQ-INT-0010-SGE-0073 - Detalle código económico ingreso** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0071 - Listar códigos económicos de ingresos](req-int-0010-sge-0071-listar-codigos-economicos-de-ingresos.md) |  |  | **REQ-INT-0010-SGE-0071 - Listar códigos económicos de ingresos** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0070 - Listar códigos económicos de gastos](req-int-0010-sge-0070-listar-codigos-economicos-de-gastos.md) |  |  | **REQ-INT-0010-SGE-0070 - Listar códigos económicos de gastos** | IN PROGRESS |  |  |  |  | 1.0.0 |
| [REQ-INT-0010-SGE-0072 - Detalle código económico gasto](req-int-0010-sge-0072-detalle-codigo-economico-gasto.md) |  |  | **REQ-INT-0010-SGE-0072 - Detalle código económico gasto** | IN PROGRESS |  |  |  |  | 1.0.0 |