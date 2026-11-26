# MA. Investigadores. Definición

* [Buscador Personal Investigador](#buscador-personal-investigador)
  + [Facetas](#facetas)
  + [Minificha buscador](#minificha-buscador)
* [Ficha Investigador](#ficha-investigador)
  + [Pestañas del investigador](#pestanas-del-investigador)
    - [Publicaciones](#publicaciones)
    - [Proyectos](#proyectos)
    - [Otros resultados (antes ROs)](#otros-resultados-antes-ros)
    - [Áreas temáticas (calculadas de las publicaciones).](#areas-tematicas-calculadas-de-las-publicaciones)
    - [Colaboraciones](#colaboraciones)
    - [Otros méritos (antes CV).](#otros-meritos-antes-cv)

## Buscador Personal Investigador

Usar este nombre en lugar de investigadores en toda la interfaz.

En el buscador, deben estar todos los investigadores que participan tanto en los proyectos como en otras publicaciones, deben aparecer tanto los de investigadores de la universidad como los externos.

### Facetas

* Áreas temáticas (declaradas por el investigador, esto debería poder editarlo, pero tal vez no en su CV. ¿En una configuración de perfil? Las áreas temáticas serían las del tesauro unificado de EDMA).
* Organización (departamento de la universidad)
* Número de publicaciones (si no se puede calcular en línea hay que desnormalizarlo).
* Índice h (dato desnormalizado y calculado periódicamente, o bien recuperado de WoS y/o Scopus)
* Grupo de investigación (ordenado por el grupo con más investigadores activos).
* Internos (activos, inactivos) / Externos
* Línea de investigación (definida en el grupo al que pertenece)

### Minificha buscador

* Nombre investigador / Número publicaciones / Índice h con un tooltip que indique la fuente (SCOPUS / WoS…)
* Posición, Departamento  / Externo
* Resumen CV texto (primer párrafo), sólo los internos.

## Ficha Investigador

* Nombre investigador / Número publicaciones / Índice h con un tooltip que indique la fuente (SCOPUS / WoS, …)
* Posición. Departamento / Externo
* Resumen CV texto (primer párrafo), sólo los internos.
* Áreas temáticas (listado, declaradas por el investigador interno, ¿calculadas en el  externo?)
* Enlaces a redes de investigación y otros enlaces (tal y como está ahora)
* Contacto: Correo / Teléfono / Dirección (quitar teléfono móvil y fax)

### Pestañas del investigador

* ### Publicaciones

  + Facetas y minificha. Las indicadas para el [buscador de publicaciones](ma-publicaciones-definicion.md)
  + Gráfica.
    - Publicaciones por año
    - Citas por año (cuando podamos obtener el dato)
    - La gráfica se actualiza al aplicar una faceta.
* ### Proyectos

  + Facetas y minificha, las indicadas en [buscador proyectos](../../analisis-de-proyectos-de-investigacion-modulo-de-gestion-y-analisis-de-proyectos/analisis-inicial-modulo-de-gestion-y-analisis-de-proyectos/ma-projects-definicion-funcional.md)
  + Gráfica
    - Proyectos por año (fecha de inicio y de fin)
    - La gráfica se actualiza al aplicar una faceta.
* ### Otros resultados (antes ROs)

  + Facetas (las indicadas para el buscador de ROs).
  + Minificha (las indicadas para el buscador de ROs).
  + Gráfica
    - ROs por año
    - Citas por año (cuando podamos obtener el dato)
    - La gráfica se actualiza al aplicar una faceta.
* ### Áreas temáticas (calculadas de las publicaciones).

  + Gráfica de nodos de las áreas temáticas de las publicaciones del investigador, con sus relaciones (cuando tengamos varias áreas por cada publicación).
    - Vista opcional: Gráfica de tópicos específicos de las publicaciones del investigador, con sus relaciones (cuando tengamos los tópicos de las publicaciones)
  + Gráfica de barras con el volumen (en porcentaje) de publicaciones para cada área temática
* ### Colaboraciones

  + Facetas y minifichas indicadas en el [buscador de Personal investigador](ma-investigadores-definicion.md))
  + Gráfica.
    - 10 investigadores con más publicaciones en común, con las relaciones entre ellos.
    - La gráfica se actualiza al aplicar una faceta.
* ### Otros méritos (antes CV).

  + Minifichas agrupadas por tipo (pte. definir campos de cada tipo)