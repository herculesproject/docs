# SGI - ESB - SGE - Proyecto SGE y presupuesto - Servicios Formly

##### Métodos únicamente necesarios si se requiere dar de alta proyectos SGE o relacionar proyectos del SGI con proyectos del SGE ya existentes

---

| Servicio | Método | URL | Parámetros | Respuesta | Descripción |
| --- | --- | --- | --- | --- | --- |
| [SGI - ESB - SGE - Proyecto SGE y presupuesto - Obtener campos dar de alta proyecto](sgi-esb-sge-proyecto-sge-y-presupuesto-obtener-campos-dar-de-alta-proyecto.md) | GET | /proyectos/formly/create |  | Formly | Devuelve el formulario (formly) a pintar para la pantalla de solicitar alta proyecto. |
| [SGI - ESB - SGE - Proyecto SGE y presupuesto - Obtener campos relacionar proyecto](sgi-esb-sge-proyecto-sge-y-presupuesto-obtener-campos-relacionar-proyecto.md) | GET | /proyectos/formly/update |  | Formly | Devuelve el formulario (formly) a pintar para la pantalla de solicitar nueva relación con el  proyecto económico (para relacionar un nuevo proyecto SGI con el proyecto SGE). |
| [SGI - ESB - SGE - Proyecto SGE y presupuesto - Relacionar proyecto](sgi-esb-sge-proyecto-sge-y-presupuesto-relacionar-proyecto.md) | PUT | /proyectos/formly/{id} | JSON |  | Recibe como parámetro la respuesta del usuario del formulario de modificación proyecto (formly) con los campos necesarios para crear una nueva relación de un proyecto SGI con el  proyecto SGE |
| [SGI - ESB - SGE - Proyecto SGE y presupuesto - Dar de alta proyecto](sgi-esb-sge-proyecto-sge-y-presupuesto-dar-de-alta-proyecto.md) | POST | /proyectos/formly | JSON | id  Vendrá relleno si la creación es síncrona y no vendrá si es asíncrona. | Recibe como parámetro la respuesta del usuario del formulario de alta proyecto (formly) con los campos necesarios para crear un proyecto en el SGE |