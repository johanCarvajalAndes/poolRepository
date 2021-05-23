/// <reference types="cypress" />
import {
  login,
  newPostPage,
  newPostTitle,
  verifyMessageToLong
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
      title = post.body;
      body = post.title;
      login(cy, email, password);
    });

    it(
      "Given: Estando loggeado exitosamente en la aplicación." +
        "WHEN ir a la pagina de crear new Post" +
        "WHEN escribir el titulo muy largo y el cuerpo" +
        "THEN: Then verificar que existe el mensaje de error.",
      () => { 
        //capturar screenshot
        escenario = "NO";
        //WHEN ir a la pagina de crear new Post
        newPostPage(cy, escenario);
        //WHEN escribir el titulo muy largo y el cuerpo
        newPostTitle(cy, title,body, escenario);
        //Then verificar que existe el mensaje de error 
        verifyMessageToLong(cy,escenario)
     
      }
    );

  });
});
