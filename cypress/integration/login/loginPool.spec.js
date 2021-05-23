/// <reference types="cypress" />
import { login, loginEmptyFill, loginFailPassword } from "./listFuction.js";
import { Email, Password } from "../credencia";
import { Scenary } from "../pool/a-priori/data_login.js";
Scenary.forEach((credenciales) => {
  context("Login Escenarios", () => {
    let email = Email;
    let password = Password;

    let emailTest = credenciales.email;
    let passwordTest = credenciales.password;
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
        if (emailTest == email && passwordTest == password) {
          login(cy, email, password, escenario);
        } else {
          if (emailTest == "" || passwordTest == "") {
            loginEmptyFill(cy, emailTest, passwordTest, escenario);
          } else {
            if (emailTest == email) {
              loginFailPassword(cy, emailTest, passwordTest, escenario);
            }
          }
        }
      }
    );
  });
});
