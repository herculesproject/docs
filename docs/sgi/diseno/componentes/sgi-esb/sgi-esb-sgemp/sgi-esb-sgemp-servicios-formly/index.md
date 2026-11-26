# SGI - ESB - SGEMP - Servicios Formly

##### Métodos únicamente necesarios si se requiere gestionar empresas desde el SGI (Alta, Baja, Modificación y Detalle).

---

| Servicio | Método | URL | Parámetros | Respuesta | Descripción |
| --- | --- | --- | --- | --- | --- |
| [SGI - ESB - SGEMP - Empresas - Consultar campos ver detalle](sgi-esb-sgemp-empresas-consultar-campos-ver-detalle.md) | GET | /empresas/formly/view |  | Formly | Devuelve el formulario (formly) a pintar para la pantalla de ver detalle de empresa. |
| [SGI - ESB - SGEMP - Empresas - Consultar campos modificación](sgi-esb-sgemp-empresas-consultar-campos-modificacion.md) | GET | /empresas/formly/update |  | Formly | Devuelve el formulario (formly) a pintar para la pantalla de solicitar modificación empresa, pestaña "Datos generales". Ver IU-GEN-0082 - Ver detalle - Solicitar modificación de empresa. |
| [SGI - ESB - SGEMP - Empresas - Consultar detalle](sgi-esb-sgemp-empresas-consultar-detalle.md) | GET | /empresas/formly/{id} |  | JSON | Devuelve los datos a pintar en el formulario de Ver Detalle/Actualizar en el SGI (formly). |
| [SGI - ESB - SGEMP - Empresas - Modificar](sgi-esb-sgemp-empresas-modificar.md) | PUT | /empresas | JSON | id  Vendrá relleno si la creación es síncrona y no vendrá si es asíncrona. | Recibe como parámetro la respuesta del usuario del formulario de datos de modificación (formly) con los campos necesarios para actualizar una empresa. |
| [SGI - ESB - SGEMP - Empresas - Dar de alta](sgi-esb-sgemp-empresas-dar-de-alta.md) | POST | /empresas | JSON |  | Recibe como parámetro la respuesta del usuario del formulario de datos de alta (formly) con los campos necesarios para crear una empresa. |
| [SGI - ESB - SGEMP - Empresas - Consultar campos alta](sgi-esb-sgemp-empresas-consultar-campos-alta.md) | GET | /empresas/formly/create |  | Formly | Devuelve el formulario (formly) a pintar para la pantalla de solicitar alta empresa, pestaña "Datos generales". Ver [IU-GEN-0081 - Solicitar alta de empresa.](../../../../../requisitos-y-analisis-funcional/analisis-funcional-sgi-hercules/gen-aspectos-generales/sha-buscadores-y-listados-comunes/iu-gen-0081-solicitar-alta-de-empresa.md) |