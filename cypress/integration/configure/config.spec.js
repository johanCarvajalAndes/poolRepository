import { login, goToGeneralPage, expandSiteTimeZoneOption, selectTimeZoneOption, verifyTimeZone, verifyPublicationLanguaje, expandSocialAccountOption, insertValueInLanguajeInput, insertValueInSocialAccountInput, verifySocialAccount, clicOnGeneraPageSaveButton, expandTitleAndDescriptionOption, insertValueInTitleInput, verifyTitleSite, expandPublicationLanguage, expandMetadata, insertValueInMetaTitle, insertValueInMetaDescription, verifyMetaDescription, photo } from "./listFunction";
import { Email, Password, numberScenarios } from '../credencia'

for (var i = 0; i < numberScenarios; i++) {

    context("Configuración Escenarios", () => {
        let title;
        let email = Email;
        let password = Password;
        const timeZone = '(GMT -4:00) Santiago';
        const bogotaTimeZone = '(GMT -5:00) Bogota, Lima, Quito';
        const socialAccountErrorMessage = "URL of your publication's Facebook Page";
        const socialAccountFailedValue = "{selectall}{del}http://" + cy.faker.lorem.words() + "{}";
        const socialAccount = "{selectall}{del}" + "https://www.facebook.com/" + cy.faker.lorem.text();
        const titleSite = cy.faker.lorem.words();
        const languaje = cy.faker.address.cityName();
        const metadataTitle = cy.faker.lorem.words();
        const metadataDescription = cy.faker.lorem.paragraph();



        beforeEach(() => {
            //iniciar sesion    
            login(cy, email, password);
        });

        it("Given: Estando loggeado exitosamente en la aplicación. WHEN: Actualizo la zona horaria a un nuevo valor . " +
            "THEN: La nueva zona horaria se mantiene con el nuevo valor.", () => {
                //ir a la pagina de general
                goToGeneralPage();
                photo(cy, "escenario1", "step1");
                //Expandir opción Site timezone
                expandSiteTimeZoneOption();
                photo(cy, "escenario1", "step2");
                //Ingresar la nueva zona horaria.
                selectTimeZoneOption(timeZone);
                photo(cy, "escenario1", "step3");
                //verificar el cambios de zona horaria
                verifyTimeZone(timeZone);
                photo(cy, "escenario1", "step4");
                //normalizar la zona horaria
                selectTimeZoneOption(bogotaTimeZone);
                photo(cy, "escenario1", "step5");
            });

        it("Given: Estando loggeado exitosamente en la aplicación. WHEN: Actualizo Social Account con un valor de URL incorrecto ." +
            " THEN: Aparece una alerta que advierte el error.", () => {
                //ir a la pagina de general
                goToGeneralPage();
                photo(cy, "escenario2", "step1");
                //Expandir opción social account.
                expandSocialAccountOption();
                photo(cy, "escenario2", "step2");
                //insertar valor incorrecto
                insertValueInSocialAccountInput(socialAccountFailedValue);
                photo(cy, "escenario2", "step3");
                //verificar el social account 
                verifySocialAccount(socialAccountErrorMessage);
                photo(cy, "escenario2", "step4");
                //normalizar social account
                insertValueInSocialAccountInput(socialAccount);
                photo(cy, "escenario2", "step5");
                //guardar el cambio
                clicOnGeneraPageSaveButton();
                photo(cy, "escenario2", "step6");
            });


        it("Given: Estando loggeado exitosamente en la aplicación. WHEN: Actualizo el titulo del site con un valor correcto." +
            " THEN: El valor ingresado como titulo se mantiene con el nuevo valor.", () => {
                //ir a la pagina de general
                goToGeneralPage();
                photo(cy, "escenario3", "step1");
                //Expandir opción social account.
                expandTitleAndDescriptionOption();
                photo(cy, "escenario3", "step2");
                //insertar valor incorrecto
                insertValueInTitleInput(titleSite);
                photo(cy, "escenario3", "step3");
                //verificar el nuevo titulo
                verifyTitleSite(titleSite);
                photo(cy, "escenario3", "step4");

            });

        it("Given: Estando loggeado exitosamente en la aplicación. WHEN: Actualizo el Lenguaje del site con un valor correcto." +
            " THEN: El valor ingresado como lenguaje se mantiene con el nuevo valor", () => {
                //ir a la pagina de general
                goToGeneralPage();
                photo(cy, "escenario4", "step1");
                //Expandir opción Publication and Language
                expandPublicationLanguage();
                photo(cy, "escenario4", "step2");
                //insertar valor correcto
                insertValueInLanguajeInput(languaje);
                photo(cy, "escenario4", "step3");
                //verificar el nuevo lenguaje
                verifyPublicationLanguaje(languaje);
                photo(cy, "escenario4", "step4");
            });

        it("Given: Estando loggeado exitosamente en la aplicación. WHEN: Actualizo la informacion de site metadata info " +
            "con un valor correcto. THEN: El valor ingresado en titulo y descripcion se mantiene con los  nuevos valores.", () => {
                //ir a la pagina de general
                goToGeneralPage();
                photo(cy, "escenario5", "step1");
                //Expandir opción Meta Data
                expandMetadata();
                photo(cy, "escenario5", "step2");
                //insertar valor correcto titulo
                insertValueInMetaTitle(metadataTitle);
                photo(cy, "escenario5", "step3");
                //insertar valor correcto description
                insertValueInMetaDescription(metadataDescription);
                photo(cy, "escenario5", "step4");
                //verificar el nuevo titulo y descripción 
                verifyMetaDescription(metadataTitle, metadataDescription);
                photo(cy, "escenario5", "step5");
            });
    });
};