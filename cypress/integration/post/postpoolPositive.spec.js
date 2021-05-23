/// <reference types="cypress" />
import {
  login,
  configPost,
  newPostPage,
  deletePost,
  verifyPostTitle,
  newPostTitle,
  returnPostList,
  selectPost,
} from "./listFuction.js";
import { Email, Password } from "../credencia";
import { Scenary } from "../pool/a-priori/data_post.js";
Scenary.forEach((post) => {
  context("Post Escenarios", () => {
    let title;
    let body;
    let email = Email;
    let password = Password;
    let escenario = "NO";
    beforeEach(() => {
      //Given: Estando logeados en la aplicacion
      title = post.title;
      body = post.body
      login(cy, email, password);
    });

    it(
      "Given: Estando loggeado exitosamente en la aplicación." +
        "WHEN ir a la pagina de crear new Post" +
        "WHEN escribir el titulo" +
        "WHEN volver a lista de post" +
        "THEN: verificar post en lista de post.",
      () => {
         //capturar screenshot
         escenario = "NO";
        //WHEN ir a la pagina de crear new Post
        newPostPage(cy, escenario);

        //WHEN escribir el titulo y el cuerpo
        newPostTitle(cy, title, body,escenario);
        //WHEN volver a lista de post
        returnPostList(cy, escenario);
        //THEN verificar post en lista de post
        verifyPostTitle(cy, title, escenario);
      }
    );
    it(
      "Given: Estando loggeado exitosamente en la aplicación." +
        "WHEN seleccionar el post" +
        "WHEN ir a configuraciones del post" +
        "THEN: eliminar el post.",
      () => {
         //capturar screenshot
         escenario = "NO";
        //WHEN seleccionar el post
        selectPost(cy, title, escenario);
        // WHEN ir a configuraciones del post
        configPost(cy, escenario);
        //THEN eliminar el post
        deletePost(cy, escenario);
      }
    );
   
  });
});
