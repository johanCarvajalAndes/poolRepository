# Introducción:
Este proyecto de carácter educativo aplica pruebas E2E sobre un aplicativo web, las cuales validaron los escenarios  en Cypress bajo datos generados automaticamente de 3 tipos:
    1. pool de datos a-priori 
    2. pool de datos (pseudo) aleatorio dinámico 
    3. Escenario aleatorio.
    
## Issues

Las insidencias identificadas por el equipo de pruebas se encuentran reportadas en el proyecto Bug Reporter de este mismo repositorio [Ver Issues](https://github.com/johanCarvajalAndes/poolRepository/projects/1)

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
| Crear un post       | 20 Escenarios de Crear un post como borrador con un titulo de mas de 200 caracteres con pool de datos a-priori | Se realiza un login, se navega hasta los Post, se escribe un texto precargado en el post, se verifica que exista un mensaje de titulo demasiado largo. |[Ver-generacion](https://github.com/johanCarvajalAndes/poolRepository/wiki/CREAR-POSTS-COMO-BORRADOR-NEGATIVO)|pool de datos a-priori  de escenarios negativos|
| Login  |10 Escenarios de Login con un pool de datos a-priori| Se digitan campos en email y contraseña y se valida la retroalimentacion|[Ver-generacion](https://github.com/johanCarvajalAndes/poolRepository/wiki/Login)|pool de datos a-priori de escenarios positivos|
| Crear una página   | 40 Escenarios de Crear una pagina como borrador, publicarla y eliminarla con un pool de datos pseudo-aleatorio dinámico. | Se realiza un login, se navega hasta las paginas, se escribe un titulo el header de la pagina y se verifica que exista en la lista de pages |[Ver-generacion](https://github.com/johanCarvajalAndes/poolRepository/wiki/PageData)|pool de datos pseudo-aleatorio dinamico escenarios positivos.|
|Crear Tag |40 Escenarios de creación y validación de tags en post y pages. | Se realiza el login, se direciona a tags se diligencia el nombre y el slug y se guarda|[Ver-generacion](https://github.com/johanCarvajalAndes/poolRepository/wiki/TagData)|pseudo-aleatorio dinamico escenarios positivos|
|Configuraciones generales| 40 Escenarios para probar el menu General Settings con un pool de datos aleatorios usando Fakerjs.|Se realiza edicion y mverificacion de diferentes configuraciones disponibles del sistema de configuraciones generales|[Ver generación](https://github.com/johanCarvajalAndes/poolRepository/wiki/Pool-de-datos-aleatorios)|Tipo de dato aleatorio escenarios positivos|
