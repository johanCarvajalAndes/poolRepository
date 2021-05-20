/// <reference types="cypress" />
import { login, goToGeneralPage, expandSiteTimeZoneOption, selectTimeZoneOption, verifyTimeZone, verifyPublicationLanguaje, expandSocialAccountOption, insertValueInLanguajeInput, insertValueInSocialAccountInput, verifySocialAccount, clicOnGeneraPageSaveButton, expandTitleAndDescriptionOption, insertValueInTitleInput, verifyTitleSite, expandPublicationLanguage, expandMetadata, insertValueInMetaTitle, insertValueInMetaDescription, verifyMetaDescription } from "./listFunction";
import {Email, Password} from '../credencia'

context("Configuración Escenarios", () => {
    let title;
    let email = Email;
    let password = Password;
    const timeZone = '(GMT -4:00) Santiago';
    const bogotaTimeZone = '(GMT -5:00) Bogota, Lima, Quito';
    const socialAccountErrorMessage = "URL of your publication's Facebook Page";
    const socialAccountFailedValue = "{selectall}{del}http://hol{}";
    const socialAccount = '{selectall}{del}https://www.facebook.com/ghost';
    const titleSite = 'Pruebas automatizadas de software - Uniandes '
    const languaje = 'en';
    const metadataTitle = 'Uniandes - Pruebas Cypress';
    const metadataDescription = 'Uniandes - descripcion';


    beforeEach(() => {
        //iniciar sesion    
        login(cy, email, password);
    });

    it("Given: Estando loggeado exitosamente en la aplicación. WHEN: Actualizo la zona horaria a un nuevo valor . " +
        "THEN: La nueva zona horaria se mantiene con el nuevo valor.", () => {
        //ir a la pagina de general
        goToGeneralPage();
        //Expandir opción Site timezone
        expandSiteTimeZoneOption();
        //Ingresar la nueva zona horaria.
        selectTimeZoneOption(timeZone);
        //verificar el cambios de zona horaria
        verifyTimeZone(timeZone);
        //normalizar la zona horaria
        selectTimeZoneOption(bogotaTimeZone);
    });

    it("Given: Estando loggeado exitosamente en la aplicación. WHEN: Actualizo Social Account con un valor de URL incorrecto ." +
        " THEN: Aparece una alerta que advierte el error.", () => {
        //ir a la pagina de general
        goToGeneralPage();
        //Expandir opción social account.
        expandSocialAccountOption();
        //insertar valor incorrecto
        insertValueInSocialAccountInput(socialAccountFailedValue);
        //verificar el social account 
        verifySocialAccount(socialAccountErrorMessage);
        //normalizar social account
        insertValueInSocialAccountInput(socialAccount);
        //guardar el cambio
        clicOnGeneraPageSaveButton();
    });


    it("Given: Estando loggeado exitosamente en la aplicación. WHEN: Actualizo el titulo del site con un valor correcto." +
        " THEN: El valor ingresado como titulo se mantiene con el nuevo valor.", () => {
        //ir a la pagina de general
        goToGeneralPage();
        //Expandir opción social account.
        expandTitleAndDescriptionOption();
        //insertar valor incorrecto
        insertValueInTitleInput(titleSite);
        //verificar el nuevo titulo
        verifyTitleSite(titleSite);

    });

    it("Given: Estando loggeado exitosamente en la aplicación. WHEN: Actualizo el Lenguaje del site con un valor correcto." +
        " THEN: El valor ingresado como lenguaje se mantiene con el nuevo valor", () => {
        //ir a la pagina de general
        goToGeneralPage();
        //Expandir opción Publication and Language
        expandPublicationLanguage();
        //insertar valor correcto
        insertValueInLanguajeInput(languaje);
        //verificar el nuevo lenguaje
        verifyPublicationLanguaje(languaje);
    });

    it("Given: Estando loggeado exitosamente en la aplicación. WHEN: Actualizo la informacion de site metadata info " +
        "con un valor correcto. THEN: El valor ingresado en titulo y descripcion se mantiene con los  nuevos valores.", () => {
        //ir a la pagina de general
        goToGeneralPage();
        //Expandir opción Meta Data
        expandMetadata();
        //insertar valor correcto titulo
        insertValueInMetaTitle(metadataTitle);
        //insertar valor correcto description
        insertValueInMetaDescription(metadataDescription);
        //verificar el nuevo titulo y descripción 
        verifyMetaDescription(metadataTitle, metadataDescription);
    });
});
