# SGI - ESB - SGP - Servicios Formly

##### Métodos únicamente necesarios si se requiere gestionar personas desde el SGI (Alta, Baja, Modificación y Detalle).

---

| Servicio | Método | URL | Parámetros | Respuesta | Descripción |
| --- | --- | --- | --- | --- | --- |
| [SGI - ESB - SGP - Personas - Consultar detalle](sgi-esb-sgp-personas-consultar-detalle.md) | GET | /personas/formly/{id} |  | JSON | Devuelve los datos a pintar en el formulario de Ver Detalle/Actualizar en el SGI (formly). |
| [SGI - ESB - SGP - Personas - Consultar campos ver detalle](sgi-esb-sgp-personas-consultar-campos-ver-detalle.md) | GET | /personas/formly/view |  | Formly | Devuelve el formulario (formly) a pintar para la pantalla de ver detalle de persona. |
| [SGI - ESB - SGP - Personas - Modificar](sgi-esb-sgp-personas-modificar.md) | PUT | /personas | JSON |  | Recibe como parámetro la respuesta del usuario del formulario de datos de modificación (formly) con los campos necesarios para actualizar una persona. |
| [SGI - ESB - SGP - Personas - Consultar campos modificación](sgi-esb-sgp-personas-consultar-campos-modificacion.md) | GET | /personas/formly/update |  | Formly | Devuelve el formulario (formly) a pintar para la pantalla de solicitar modificar persona. |
| [SGI - ESB - SGP - Personas - Dar de alta](sgi-esb-sgp-personas-dar-de-alta.md) | POST | /personas | JSON | id  Vendrá relleno si la creación es síncrona y no vendrá si es asíncrona. | Recibe como parámetro la respuesta del usuario del formulario de datos de alta (formly) con los campos necesarios para crear una persona. |
| [SGI - ESB - SGP - Personas - Consultar campos alta](sgi-esb-sgp-personas-consultar-campos-alta.md) | GET | /personas/formly/create |  | Formly | Devuelve el formulario (formly) a pintar para la pantalla de solicitar alta persona. Ver  [IU-GEN-0061- Solicitar alta de persona](../../../../../requisitos-y-analisis-funcional/analisis-funcional-sgi-hercules/gen-aspectos-generales/sha-buscadores-y-listados-comunes/iu-gen-0061-solicitar-alta-de-persona.md). |