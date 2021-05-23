/// <reference types="cypress" />
import {
  login
} from "./listFuction.js";
import { Email, Password } from "../credencia";
import { Scenary } from "../pool/a-priori/data_login.js";
Scenary.forEach((credenciales) => {
  context("Post Escenarios", () => {
    let title;
    let body;
    let email = Email;
    let password = Password;
    //capturar screenshot
    let escenario = "NO";
    beforeEach(() => {
      
      emailTest = credenciales.email;
      passwordTest = credenciales.password;
     
    });

    it(
      "Given: Estando registrado en la aplicacion " +
        "WHEN  Se intentan diferentes escenarios para logeo" +
        "WHEN escribir el usuario" +
        "WHEN escribir la contraseña" +
        "THEN: El sistema verifica la informacion y da retroalimentacion",
      () => { 
        
        //WHEN ir a la pagina de crear new Post
        newPostPage(cy, escenario);
        //WHEN escribir el titulo y el cuerpo
        newPostTitle(cy, title,body, escenario);
        //WHEN volver a lista de post
        returnPostList(cy, escenario);
        //THEN verificar post en lista de post
        verifyPostTitle(cy, title, escenario);
      }
    );
 

  });
});
