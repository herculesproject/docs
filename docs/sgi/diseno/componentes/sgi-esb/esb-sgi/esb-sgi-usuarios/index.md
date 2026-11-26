# ESB - SGI - Usuarios

---

* [Sistema de Gestión Investigación](#sistema-de-gestion-investigacion)
  + [Entidades](#entidades)
  + [Modelo lógico](#modelo-logico)
  + [API](#api)
    - [Definición de los objetos](#definicion-de-los-objetos)
      * [Unidad](#unidad)
    - [Servicios](#servicios)

---

## Sistema de Gestión Investigación

### Entidades

| Entidad | Descripción |
| --- | --- |
| Unidad | Unidad de gestión |

### Modelo lógico

USR - Modelo lógico

### API

Características generales que todas las API REST deben de cumplir:

* [Consultas filtradas y paginadas](../../../../../desarrollo-y-configuracion/estandares-de-desarrollo/consultas-filtradas-y-paginadas.md)
* [Formatos de datos API](../../../../../desarrollo-y-configuracion/estandares-de-desarrollo/formatos-de-datos-api.md)

#### Definición de los objetos

##### Unidad

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| createdBy | String | Referencia al usuario creador del registro en los sistemas de la Universidad. |
| creationDate | Fecha + Hora | Fecha y hora de creación del registro.  Formato UTC. |
| lastModifiedBy | String | Referencia al último usuario que modificó el registro en los sistemas de la Universidad. |
| lastModifiedDate | Fecha + Hora | Fecha y hora de creación del registro.  Formato UTC. |
| id | Long | Identificador único de la Unidad de gestión. |
| nombre | String | Nombre de la unidad de gestión. |
| acronimo | String | Acrónimo de la unidad de gestión. |
| descripcion | String | Descripción de la unidad de gestión. |
| activo | Boolean | Flag con el que se da cobertura al borrado lógico de los registros de esta tabla. |

#### Servicios

Para componer la URL llamada completa, se debe anteponer a lo indicado en la columna URL lo siguiente: **{HOST}/api/sgiusr**, donde **{HOST}** de deberá sustituir el dominio correspondiente al entorno al que se está accediendo y dicho acceso será por http o https según el caso.

| Servicio | Método | URL | Parámetros | Respuesta | Descripción |
| --- | --- | --- | --- | --- | --- |
| [ESB - SGI - Usuarios - Unidades - Consultar detalle](esb-sgi-usuarios-unidades-consultar-detalle.md) | GET | /unidades/{id} |  | [Unidad](index.md#unidad) | Retorna el detalle de una Unidad de gestión. |
| [ESB - SGI - Usuarios - Unidades - Buscar](esb-sgi-usuarios-unidades-buscar.md) | GET | /unidades | q+s (query + sort)  La query estará formada por:   * cualquiera de los campos del objeto Unidad | Lista[[Unidad](index.md#unidad)] | Busca / Lista Unidades de gestión. |