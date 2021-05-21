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

## Configuración inicial:

1. En el archivo: cypress/integration/credencia.js
  reemplace los parámetros por los del usuario administrador de su cuenta Ghost. 

  ### Ejemplo:

        export const Email = "j.carvajalm@uniandes.edu.co"
        export const Password = "mfYyHi8q.Mix@r#"
        export const Url = "http://localhost:2368"
        export const User= "Johan"


* __Nota__: El parametro __User__ es el username asignado por Ghost al momento de crear el usuario de login.

## Ejecutar
Abra el la carpeta cypress raíz de este proyecto con la herramienta cypress, presione Run integration spect que aparece en la pantalla y listo. todos los espect correrán de forma automática.

## Tabla de funcionalidades y Escenarios:


| Funcionalidades | Escenarios | Descripción 	 |generacion|tipo|
|-------------------------|---------------------------|---------------------------|-----------|------------------------|
| Crear un post       | 10 Escenarios de Crear un post como borrador con un pool de datos a-priori | Se realiza un login, se navega hasta los Post, se escribe un texto precargado en el post, se verifica que exista en la lista de post, se elimina el post |[Ver-generacion](https://github.com/johanCarvajalAndes/poolRepository/wiki/Es-crear-post)|pool de datos a-priori  de escenarios positivos|
| Eliminar un post |Escenario 2 eliminar un post de borradores| Se realiza login, seleccionamos un post con titulo paramétrico en las opciones del mismo se realiza la eliminación. se verifica que corre sin defectos.|||
|Publicar un post |Escenario 3 publicar un post y verificarlo en la página|Se realiza login, se crea un post, se verifica el post en la lista, se ingresa nuevamente al post, se publica, se verifica que en la página principal se encuentre publicado|||
|Publicar un post |Escenario 4 verificar generar slug|Se realiza login, se selecciona un post publicado, se obtiene el link generado en la configuración, se visita dicho link y se verifica que el titulo corresponda a dicho link.|||
|Publicar un post| Escenario 5 verificar el post publicado pertenece al usuario|Se realiza login,Se visita la pagina principal y el post publicado, se verifica que el usuario tenga en su lista de post publicados el post |||
|Eliminar un post| Escenario 6 Eliminar un post publicado|Se realiza login, se visita la página de post publicados, se ingresa a la configuración, se elimina el post|||
| Crear una página   | Escenario 7 crear una pagina como borrador con título | Se realiza un login, se navega hasta las paginas, se escribe un titulo el header de la pagina y se verifica que exista en la lista de pages |||
| Eliminar una página |Escenario 8 eliminar una pagina de borradores| Se realiza login, seleccionamos una pagina con titulo paramétrico en las opciones del mismo se realiza la eliminación. se verifica que corre sin defectos.|||
|Publicar una página |Escenario 9 publicar una página y verificar en la parte inferior de la página su publicación|Se realiza login, se crea una página, se verifica la página en la lista, se ingresa nuevamente a la página, se publica, se verifica que en la página principal se encuentre publicado.|||
|Verificar el autor de una página |Escenario 10 publicar una página y verificar en la parte superior derecha en las configuraciones de la página su creador|Se realiza login, se crea una página, se verifica la página en la lista, se ingresa nuevamente a la página, se verifica en las configuraciones en la página principal superior derecha se encuentre el respectivo creador parametrizado.|||
|Validar la existencia del link de una pagina luego de creada|Escenario 11 publicar una página y verificar la existencia de la publicación|Se realiza login, se crea una página, se verifica la página en la lista, se ingresa nuevamente a la página, se accede a configuraciones en la parte superior derecha y se accede al link creado.|||
|Crear Tag |Escenario 12 creacion de tags | Se realiza el login, se direciona a tags se diligencia el nombre y el slug y se guarda|||
|Validar Tag Post |Escenario 13 validacion de tags en post| Se realiza el login, se direciona a post, se ingresa a la pagina welcome, se ingresa a los settigns y se seleciona el yag creado.|||
|Validar Tag Page |Escenario 14 validacion de tags en post| Se realiza el login, se direciona a page, se ingresa una Page, se ingresa a los settigns y se seleciona el tag creado.|||
|Eliminar Tag |Escenario 15 Eliminacion de tags| Se realiza el login, se direciona a tags, se seleciona uno, se selecciona la opcion de eliminar, luego de confirmar y se retorna al listado de tags|||
|Validar Tag En Web Reader |Escenario 16 Validar tags en el sitio de lectura| Se ingresa al sitio e lectura a la pagina welcome y se valida el tag asociado a la pagina.|||
|Actualizar zona horaria| Escenario 17 Actualizar zona horaria|Se realiza el login en el sitio web usando usuario y password, posteriormente se ingresa a la opcion generar y se realizar la actualización de la zona horaria|||
|Actualizar social account| Escenario 18 Actualizar social account|Se realiza el login en el sitio web usando usuario y password, posteriormente se ingresa a la opcion generar y se realizar la actualización del social account|||
|Actualizar Titulo del site| Escenario 19 Actualizar Titulo del site|Se realiza el login en el sitio web usando usuario y password, posteriormente se ingresa a la opcion generar y se realizar la actualización del titulo del site|||
|Actualizar lenguaje del site| Escenario 20 Actualizar lenguaje del site|Se realiza el login en el sitio web usando usuario y password, posteriormente se ingresa a la opcion generar y se realizar la actualización del lenguaje del sitio|||
|Actualizar metadata del site| Escenario 21 Actualizar metadata del site|Se realiza el login en el sitio web usando usuario y password, posteriormente se ingresa a la opcion generar y se realizar la actualización de la metadata del sitio.|||

