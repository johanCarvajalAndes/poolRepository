/// <reference types="cypress" />
import { login, goToPostPublished,configPost,verifySlug,verifyUserListPost,verifyUrlPost,verifyPageOnePost,newPostPage,deletePost,retuntToPost, showPublishPost,verifyPostTitle,publicPost,newPostTitle,returnPostList,verifyPostTitleinWeb, selectPost } from "./listFuction.js";
import {Email, Password} from '../credencia'
context("Post Escenarios", () => {
  let title;
  let email = Email;
  let password = Password;
  let escenario = "NO"
  beforeEach(() => {
    //Given: Estando logeados en la aplicacion
    title= "lapruebaRegresion"
    login(cy,email,password);
  });

  it("Given: Estando loggeado exitosamente en la aplicación."+ 
  "WHEN ir a la pagina de crear new Post" +
  "WHEN escribir el titulo" +
  "WHEN volver a lista de post" +
  "THEN: verificar post en lista de post.", () => {
    escenario = "escenario1/crearnewPost/"
    //WHEN ir a la pagina de crear new Post
    newPostPage(cy,escenario);
  
  
    //WHEN escribir el titulo
    newPostTitle(cy,title,escenario);
    //WHEN volver a lista de post
    returnPostList(cy,escenario)
    //THEN verificar post en lista de post
    verifyPostTitle(cy, title,escenario)
    
  });
it("Given: Estando loggeado exitosamente en la aplicación."+ 
"WHEN seleccionar el post" +
"WHEN ir a configuraciones del post" +
"THEN: eliminar el post.", () => {
  escenario = "escenario2/EliminarBorradorPost"
    //WHEN seleccionar el post
   selectPost(cy,title,escenario);
    // WHEN ir a configuraciones del post
    configPost(cy,escenario);
   //THEN eliminar el post
    deletePost(cy,escenario)
    
  });

  it("Given: Estando loggeado exitosamente en la aplicación."+
      "WHEN crear un nuevo Post" +
      "WHEN publicarlo" +
      "THEN: verificar el post en la web page.", () => {
        escenario = "escenario3/PublicarPost"
     //WHEN ir a la pagina de crear new Post
    newPostPage(cy,escenario);
    //WHEN escribir el titulo
    newPostTitle(cy,title,escenario);
    //WHEN volver a lista de post
    returnPostList(cy,escenario)
    //WHEN seleccionar el post creado
    retuntToPost(cy,title,escenario);
    //WHEN publicar el post
    publicPost(cy,escenario);
   // THEN verificar post en web page
    verifyPostTitleinWeb(cy, title,escenario)
    
  });

  it("Given: Estando loggeado exitosamente en la aplicación."+
  "WHEN ir a un post publicado y verificar el slug" +
  "THEN el post esta publicado en esa ruta", () => {
    escenario = "escenario4/VerificarSlugPost"
    //WHEN ir a un post publicado 
    goToPostPublished(cy, title,escenario)
   //WHEN ir a configuraciones
   configPost(cy,escenario);
  //WHEN verificar y extraer la ruta asignada al post
   verifySlug(cy,escenario)
    //THEN verificar titulo del post en la web page
   verifyPageOnePost(cy,title,escenario)
   
 });

 it("Given: Estando loggeado exitosamente en la aplicación."+
 "WHEN ir a la pagina principal de post publicados" +
 "THEN verificar que el usuario cuenta con el post en sus publicaciones", () => {
  escenario = "escenario5/VerificarUsuarioPost"
  // WHEN ir a la pagina principal de post publicados
 verifyPostTitleinWeb(cy, title,escenario)
 //THEN verificar que el usuario cuenta con el post en sus publicaciones
 verifyUserListPost(cy, title,escenario)
 
});

it("Given: Estando loggeado exitosamente en la aplicación."+
"WHEN ir a un post publicado" +
"THEN eliminar el post", () => {
  escenario = "escenario6/EliminarPostPublicado"
  //WHEN ir a un post publicado
 goToPostPublished(cy, title,escenario)
 //WHEN ir a configuraciones del post
 configPost(cy,escenario);
 //THEN eliminar el post
  deletePost(cy,escenario)
 
});

});
