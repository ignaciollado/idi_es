# WebIdiEs (www.idi.es)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Pre-production site

[https://pre.idi.es](https://pre.idi.es)
or
¿¿¿ netlify ???

## Production site

[https://www.idi.es](https://www.idi.es)

## Gestor de contenidos generales

Para la gestión de los  contenidos en esta web se usa JOOMLA 4. El sitio en el que está alojado es:

[https://contents.idi.es](https://contents.idi.es)

para acceder se usan los end-points de JOOMLA y luego, por codificación TypeScript, se filtran los resultados deseados ( JOOMLA sólo tiene dos tipos de endponts: get all contents y get one content by ID ).

Los contenidos los mantiene el departamento de COMUNICACIÓN

## Taxonomía de los contenidos de la web

- Para estructurar los contenidos en función del público objetivo se ha creado la categoría raíz:

**IDI-WEB-ROOT**

de esta categoría colgarán las distintas sub-categorías que se corresponderán con el público objetivo. Actualmente existen estas cuatro:
1. Ets una empresa?
2. Ets una persona emprenedora?
3. Ets un ajuntament
4. Ets un centre educatiu?

La versión del título en català está en el campo `title`. La versión del título en español está en el campo `note`. Como sub-categorías de estas, es decir, como categorías 'nietas' de **idi-web-root** se crearán los servicios correspondientes. 
Cualquier contenido tipo `article`creado y asignado a una de estas categorías 'nietas' aparecerá en el detalle.


- Para estructurar los contenidos del apartado _Qui som_ se ha creado la categoría raíz:

**IDI-QUI-SOM**

Dentro de esta se han creado tres sub-categorías correspondientes a las tres áreas del apartado: IDI, La historia del IDI y Proyectos IDI.
Además, la sub-categoría correspondiente a Proyectos IDI `Projectes IDI` contendrá otras sub-categorías correspondientes a cada uno de los servicios del IDI (_Foment del disseny_, _Informació sobre registre de marques_, _Digitalització_ ...) .


- Para las noticias que genera el IDI:

**Noticies**

Cualquier artículo asignado a esta categoría y publicado aparecerá dentro de la opción de menú `Noticies`. La imagen que aparece en la portada es la que se corresponde con el campo `Intro Image`. La imagen que aparece en el detalle de la noticia es la que se corresponde con el campo `Full article Image`. Las etiquetas que se muestran en el pie del detalle de la noticia se corresponden con el campo `Tags`.

### Contenidos particulares de los apartados 'Ayudas y subvenciones' y 'Agenda'
Para la gestión de los contenidos correspondientes al apartado **'Ayudas y subvenciones'** se usa un iframe que a punta a  

https://utils.idi.es


y que a su vez, obtiene los contenidos del CRM y que está en:

https://crm.idi.es



