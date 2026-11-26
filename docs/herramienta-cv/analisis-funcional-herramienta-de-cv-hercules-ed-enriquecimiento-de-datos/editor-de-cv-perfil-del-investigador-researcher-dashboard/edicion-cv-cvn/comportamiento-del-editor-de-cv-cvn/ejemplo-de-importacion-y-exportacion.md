# Ejemplo de importación y exportación

* [Ejemplo de importación](#ejemplo-de-importacion)
* [Ejemplo de exportación](#ejemplo-de-exportacion)

### Ejemplo de importación

En el caso de querer importar un CV por parte del usuario desde la pestaña de importar, adjuntaremos un archivo PDF con el CV asociado.

[![Imagen — Ejemplo de importación (1 de 8)](https://github.com/HerculesCRUE/HerculesED/raw/main/Docs/media/ImportExportCV/importacionPaso1.png)](https://github.com/HerculesCRUE/HerculesED/blob/main/Docs/media/ImportExportCV/importacionPaso1.png)

[![Imagen — Ejemplo de importación (2 de 8)](https://github.com/HerculesCRUE/HerculesED/raw/main/Docs/media/ImportExportCV/importacionPaso2.png)](https://github.com/HerculesCRUE/HerculesED/blob/main/Docs/media/ImportExportCV/importacionPaso2.png)

Clicaremos en el botón de "PROCESAR" para que el fichero sea leido y procesado para su carga en el sistema.

[![Imagen — Ejemplo de importación (3 de 8)](https://github.com/HerculesCRUE/HerculesED/raw/main/Docs/media/ImportExportCV/importacionPaso3.png)](https://github.com/HerculesCRUE/HerculesED/blob/main/Docs/media/ImportExportCV/importacionPaso3.png)

Tras el procesado del archivo necesitaremos seleccionar los ítems que el sistema haya detectado como similares sobre los que están cargados previamente en el CV del usuario, puesto que los ítems nuevos estarán preseleccionados por defecto, además de la sección de datos de identificación. El usuario puede no cargar elementos nuevos quitando el check que estará por defecto seleccionado. Los ítems con similitudes tendrán un dropbox con diferentes opciones a seleccionar dependiendo de si el ítem con similaridad está validado o no, en el caso de estar validado se señalizará con el siguiente icono: [![Imagen — Ejemplo de importación (4 de 8)](https://github.com/HerculesCRUE/HerculesED/raw/main/Docs/media/ImportExportCV/importacioniconoBloqueado.png)](https://github.com/HerculesCRUE/HerculesED/blob/main/Docs/media/ImportExportCV/importacioniconoBloqueado.png)

Si se desea cargar, modificar o duplicar algún ítem con similaridad se deberá hacer click para poder desbloquear el dropbox asociado al mismo.

[![Imagen — Ejemplo de importación (5 de 8)](https://github.com/HerculesCRUE/HerculesED/raw/main/Docs/media/ImportExportCV/importacionDropboxBloqueado.png)](https://github.com/HerculesCRUE/HerculesED/blob/main/Docs/media/ImportExportCV/importacionDropboxBloqueado.png) [![Imagen — Ejemplo de importación (6 de 8)](https://github.com/HerculesCRUE/HerculesED/raw/main/Docs/media/ImportExportCV/importacionDropboxDesbloqueado.png)](https://github.com/HerculesCRUE/HerculesED/blob/main/Docs/media/ImportExportCV/importacionDropboxDesbloqueado.png)

Las opciones que aparecerán en ambos casos serán:

* Ignorar - Opción por defecto, si no se cambia no se cargará el ítem.
* Fusionar - Añadirá a los valores vacíos del ítem en BBDD, los valores del ítem cargado.
* Duplicar - Añadirá un ítem nuevo.

[![Imagen — Ejemplo de importación (7 de 8)](https://github.com/HerculesCRUE/HerculesED/raw/main/Docs/media/ImportExportCV/importacionDropbox.png)](https://github.com/HerculesCRUE/HerculesED/blob/main/Docs/media/ImportExportCV/importacionDropbox.png)

En el caso de que el ítem no esté validado además aparecerá la opción:

* Sobrescribir - El ítem cargado sobrescribirá los datos del que está actualmente en BBDD.

[![Imagen — Ejemplo de importación (8 de 8)](https://github.com/HerculesCRUE/HerculesED/raw/main/Docs/media/ImportExportCV/importacionDropbox2.png)](https://github.com/HerculesCRUE/HerculesED/blob/main/Docs/media/ImportExportCV/importacionDropbox2.png)

Tras seleccionar los ítems deseados por el usuario se debe hacer click en el botón "IMPORTAR" al final de la página para que el sistema empiece a cargar o modificar los datos.

### Ejemplo de exportación

En el caso de querer exportar un CV desde la pestaña de exportar, el usuario deberá añadir un titulo para el fichero de CV, seleccionar el idioma en el que desea que se exporte, el tipo de exportación, la versión de exportación y si desea exportar todas las secciones, seleccionar que desea exportar o tener precheckeados los ítems de los últimos 5 años. Los idiomas de exportación son:

* Español
* Inglés
* Catalán
* Euskera
* Gallego
* Francés

El tipo de exportación:

* CVN - Tipo por defecto, Curriculum vitae normalizado
* CVA-ISCIII - Curriculum vitae abreviado (ISCIII)
* CVA-AEI - Curriculum vitae abreviado (AEI)

La versión de exportación:

* 1.4.0
* 1.4.3

En el caso de seleccionar la opción de exportación "Seleccionar" o "Últimos cinco años", se cargarán los datos del usuario cargados en BBDD. [![Imagen — Ejemplo de exportación (1 de 7)](https://github.com/HerculesCRUE/HerculesED/raw/main/Docs/media/ImportExportCV/exportacionPaso1.png)](https://github.com/HerculesCRUE/HerculesED/blob/main/Docs/media/ImportExportCV/exportacionPaso2.png)

[![Imagen — Ejemplo de exportación (2 de 7)](https://github.com/HerculesCRUE/HerculesED/raw/main/Docs/media/ImportExportCV/exportacionPaso2.png)](https://github.com/HerculesCRUE/HerculesED/blob/main/Docs/media/ImportExportCV/exportacionPaso2.png)

Los elementos aparecerán por defecto sin seleccionar a excepción de los Datos de identificación del usuario, en el caso de que la opción sea "Últimos cinco años" los elementos de los últimos 5 años estarán preseleccionados.

Opción "Seleccionar": 

[![Imagen — Ejemplo de exportación (3 de 7)](https://github.com/HerculesCRUE/HerculesED/raw/main/Docs/media/ImportExportCV/exportacionPaso2Seleccionar.png)](https://github.com/HerculesCRUE/HerculesED/blob/main/Docs/media/ImportExportCV/exportacionPaso2Seleccionar.png)

Opción "Últimos cinco años": 

[![Imagen — Ejemplo de exportación (4 de 7)](https://github.com/HerculesCRUE/HerculesED/raw/main/Docs/media/ImportExportCV/exportacionPaso2Ultimos.png)](https://github.com/HerculesCRUE/HerculesED/blob/main/Docs/media/ImportExportCV/exportacionPaso2Ultimos.png)

Aquí el usuario podrá guardar perfiles de exportación para guardar los elementos seleccionados para futuras exportaciones. El usuario podrá añadir nuevos perfiles, seleccionar la carga de uno guardado previamente o la eliminación de alguno de los perfiles guardados.

[![Imagen — Ejemplo de exportación (5 de 7)](https://github.com/HerculesCRUE/HerculesED/raw/main/Docs/media/ImportExportCV/exportacionPerfilVacio.png)](https://github.com/HerculesCRUE/HerculesED/blob/main/Docs/media/ImportExportCV/exportacionPerfilVacio.png) [![Imagen — Ejemplo de exportación (6 de 7)](https://github.com/HerculesCRUE/HerculesED/raw/main/Docs/media/ImportExportCV/exportacionPerfilEjemplo.png)](https://github.com/HerculesCRUE/HerculesED/blob/main/Docs/media/ImportExportCV/exportacionPerfilEjemplo.png)

Tras seleccionar los ítems que se desean exportar, se debe seleccionar el botón "EXPORTAR", tras el cual se redirigirá al usuario a la pagina inicial con un nuevo elemento a exportar que estará en el estado "Pendiente" hasta que se haya creado el PDF, momento en el cual pasará a "Procesado" o "Error" en el caso de que se haya producido algún problema en el excepción del fichero.

 [![Imagen — Ejemplo de exportación (7 de 7)](https://github.com/HerculesCRUE/HerculesED/raw/main/Docs/media/ImportExportCV/exportacionCVNGenerados.png)](https://github.com/HerculesCRUE/HerculesED/blob/main/Docs/media/ImportExportCV/exportacionCVNGenerados.png)