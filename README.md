# Introducción:
Este proyecto de carácter educativo aplica pruebas E2E sobre un aplicativo web, las cuales validaron los escenarios  en Cypress bajo datos generados automaticamente de 3 tipos:
    1. pool de datos a-priori 
    2. pool de datos (pseudo) aleatorio dinámico 
    3. Escenario aleatorio.

# PruebasGhostE2E
Entrega de Pruebas E2E andes


## Pre Requisitos: 
1. tener instalado Cypress : https://www.cypress.io/ v. 7.3.0
2. Ghost: https://ghost.org/docs/install/ v. 3.42.5
3. Crear un usuario administrador en Ghost
4. Tener instalado faker o ejecutar el comando __npm install faker__ en la raiz del proyecto.
5. Tener instalado el modulo request de python : pip install requests o en la raiz del proyecto ejecutar pipenv install
para descargar las dependencias.


## Configuración inicial:

1. En el archivo: cypress/integration/credencia.js
  reemplace los parámetros por los del usuario administrador de su cuenta Ghost. 

  ### Ejemplo:

        export const Email = "j.carvajalm@uniandes.edu.co"
        export const Password = "mfYyHi8q.Mix@r#"
        export const Url = "http://localhost:2368"
        export const User= "Johan"
        export const numberScenarios = 8;
        export const numberScenariosPages = 16;



* __Nota__: El parametro __User__ es el username asignado por Ghost al momento de crear el usuario de login.

## Ejecutar
Para la generación de datos con la api de mockaroo, correr el archivo MockarooApi.py con el fin de hacer un get a la api y traer los datos al json datos.json. Este paso es necesario solo hacerlo una vez.
Abra el la carpeta cypress raíz de este proyecto con la herramienta cypress, presione Run integration spect que aparece en la pantalla y listo. todos los espect correrán de forma automática.

## Tabla de funcionalidades y Escenarios:


| Funcionalidades | Escenarios | Descripción 	 |generacion|tipo|
|-------------------------|---------------------------|---------------------------|-----------|------------------------|
| Crear un post       | 20 Escenarios de Crear un post como borrador con un pool de datos a-priori | Se realiza un login, se navega hasta los Post, se escribe un texto precargado en el post, se verifica que exista en la lista de post, se elimina el post |[Ver-generacion](https://github.com/johanCarvajalAndes/poolRepository/wiki/CREAR-POSTS-COMO-BORRADOR)|pool de datos a-priori  de escenarios positivos|
| Crear un post       | 20 Escenarios de Crear un post como borrador con un titulo de mas de 70 caracteres con pool de datos a-priori | Se realiza un login, se navega hasta los Post, se escribe un texto precargado en el post, se verifica que exista en la lista de post, se elimina el post en caso de existir |[Ver-generacion](https://github.com/johanCarvajalAndes/poolRepository/wiki/CREAR-POSTS-COMO-BORRADOR-NEGATIVO)|pool de datos a-priori  de escenarios negativos|
| Login  |10 Escenarios de Login con un pool de datos a-priori| Se digitan campos en email y contraseña y se valida la retroalimentacion|[Ver-generacion](https://github.com/johanCarvajalAndes/poolRepository/wiki/CREAR-POSTS-COMO-BORRADOR)|pool de datos a-priori semi-aleatorio  de escenarios positivos|
| Crear una página   | Escenario 7 crear una pagina como borrador con título | Se realiza un login, se navega hasta las paginas, se escribe un titulo el header de la pagina y se verifica que exista en la lista de pages |[Ver-generacion](https://github.com/johanCarvajalAndes/poolRepository/wiki/PageData)||
| Eliminar una página |Escenario 8 eliminar una pagina de borradores| Se realiza login, seleccionamos una pagina con titulo paramétrico en las opciones del mismo se realiza la eliminación. se verifica que corre sin defectos.|[Ver-generacion](https://github.com/johanCarvajalAndes/poolRepository/wiki/PageData)||
|Publicar una página |Escenario 9 publicar una página y verificar en la parte inferior de la página su publicación|Se realiza login, se crea una página, se verifica la página en la lista, se ingresa nuevamente a la página, se publica, se verifica que en la página principal se encuentre publicado.|[Ver-generacion](https://github.com/johanCarvajalAndes/poolRepository/wiki/PageData)||
|Verificar el autor de una página |Escenario 10 publicar una página y verificar en la parte superior derecha en las configuraciones de la página su creador|Se realiza login, se crea una página, se verifica la página en la lista, se ingresa nuevamente a la página, se verifica en las configuraciones en la página principal superior derecha se encuentre el respectivo creador parametrizado.|[Ver-generacion](https://github.com/johanCarvajalAndes/poolRepository/wiki/PageData)||
|Validar la existencia del link de una pagina luego de creada|Escenario 11 publicar una página y verificar la existencia de la publicación|Se realiza login, se crea una página, se verifica la página en la lista, se ingresa nuevamente a la página, se accede a configuraciones en la parte superior derecha y se accede al link creado.|[Ver-generacion](https://github.com/johanCarvajalAndes/poolRepository/wiki/PageData)||
|Crear Tag |Escenario 12 creacion de tags | Se realiza el login, se direciona a tags se diligencia el nombre y el slug y se guarda|[Ver-generacion](https://github.com/johanCarvajalAndes/poolRepository/wiki/TagData)|pseudo-aleatorio dinamico|
|Validar Tag Post |Escenario 13 validacion de tags en post| Se realiza el login, se direciona a post, se ingresa a la pagina welcome, se ingresa a los settigns y se seleciona el yag creado.|||
|Validar Tag Page |Escenario 14 validacion de tags en post| Se realiza el login, se direciona a page, se ingresa una Page, se ingresa a los settigns y se seleciona el tag creado.|||
|Eliminar Tag |Escenario 15 Eliminacion de tags| Se realiza el login, se direciona a tags, se seleciona uno, se selecciona la opcion de eliminar, luego de confirmar y se retorna al listado de tags|||
|Validar Tag En Web Reader |Escenario 16 Validar tags en el sitio de lectura| Se ingresa al sitio e lectura a la pagina welcome y se valida el tag asociado a la pagina.|||
|Actualizar zona horaria| Escenario 17 Actualizar zona horaria|Se realiza el login en el sitio web usando usuario y password, posteriormente se ingresa a la opcion generar y se realizar la actualización de la zona horaria|[Ver generación](https://github.com/johanCarvajalAndes/poolRepository/wiki/Pool-de-datos-aleatorios)|Tipo de dato aleatorio|
|Actualizar social account| Escenario 18 Actualizar social account|Se realiza el login en el sitio web usando usuario y password, posteriormente se ingresa a la opcion generar y se realizar la actualización del social account|[Ver generación](https://github.com/johanCarvajalAndes/poolRepository/wiki/Pool-de-datos-aleatorios)|Tipo de dato aleatorio|
|Actualizar Titulo del site| Escenario 19 Actualizar Titulo del site|Se realiza el login en el sitio web usando usuario y password, posteriormente se ingresa a la opcion generar y se realizar la actualización del titulo del site|[Ver generación](https://github.com/johanCarvajalAndes/poolRepository/wiki/Pool-de-datos-aleatorios)|Tipo de dato aleatorio|
|Actualizar lenguaje del site| Escenario 20 Actualizar lenguaje del site|Se realiza el login en el sitio web usando usuario y password, posteriormente se ingresa a la opcion generar y se realizar la actualización del lenguaje del sitio|[Ver generación](https://github.com/johanCarvajalAndes/poolRepository/wiki/Pool-de-datos-aleatorios)|Tipo de dato aleatorio|
|Actualizar metadata del site| Escenario 21 Actualizar metadata del site|Se realiza el login en el sitio web usando usuario y password, posteriormente se ingresa a la opcion generar y se realizar la actualización de la metadata del sitio.|[Ver generación](https://github.com/johanCarvajalAndes/poolRepository/wiki/Pool-de-datos-aleatorios)|Tipo de dato aleatorio|

