import {Url} from '../credencia'

export function login(cy, email, password) {
    cy.visit(Url+'/ghost/#/signin');
    cy.get(".email").type(email);
    cy.get(".password").type(password);
    cy.get(".login").click();
}

export function goToGeneralPage() {
    cy.get('a[href="#/settings/general/"]').click({force: true});
}

export function expandSiteTimeZoneOption() {
    cy.get('.gh-setting > .gh-setting-action > .gh-btn').click({force: true});
}

export function expandSocialAccountOption() {
    cy.get('.gh-setting-last:nth-child(1) .gh-btn > span').click({force: true});
}

export function expandTitleAndDescriptionOption() {
    cy.get('.mt2 > .gh-setting-first span').click({force: true});
}

export function selectTimeZoneOption(timeZone) {
    cy.get('#activeTimezone').select(timeZone, {force: true});
    clicOnGeneraPageSaveButton();
}

export function clicOnGeneraPageSaveButton() {
    cy.get("button > span").contains("Save settings").click({force: true});
}

export function verifyTimeZone(timeZone) {
    cy.reload()
    goToGeneralPage();
    expandSiteTimeZoneOption();
    cy.get('#activeTimezone').find(':selected').contains(timeZone);
}

export function insertValueInSocialAccountInput(socialAccount) {
    cy.get('[placeholder="https://www.facebook.com/ghost"]').type(socialAccount);
    cy.get('[placeholder="https://twitter.com/ghost"]').click({force: true});
}

export function verifySocialAccount(socialAccount) {
    cy.get('p').contains(socialAccount);
}

export function insertValueInTitleInput(titleSite) {
    cy.get('p').contains('The name of your site').siblings('[type="text"]').type('{selectall}{del}' + titleSite, {force: true})
    clicOnGeneraPageSaveButton();
}

export function verifyTitleSite(titleSite) {
    cy.reload();
    goToGeneralPage();
    expandTitleAndDescriptionOption();
    cy.get('.gh-nav-menu-details-blog').contains(titleSite);
}

export function expandPublicationLanguage() {
    cy.get('.gh-setting-last:nth-child(3) > .gh-setting-action > .gh-btn > span').click({force: true});
}

export function insertValueInLanguajeInput(languaje) {
    cy.get('p').contains('Default: English (en); you can add translation files to your theme for')
        .siblings('[type="text"]').type('{selectall}{del}' + languaje, {force: true})
    clicOnGeneraPageSaveButton();
}

export function verifyPublicationLanguaje(languaje) {
    cy.reload();
    expandPublicationLanguage();
    cy.get('.ember-text-field').should('have.value', languaje)
}

export function expandMetadata() {
    cy.get('.gh-setting-first > .flex span').click({force: true});
}

export function insertValueInMetaTitle(metadataTitle) {
    cy.get('#metaTitle').type('{selectall}{del}' + metadataTitle, {force: true});
}

export function insertValueInMetaDescription(metadataDescription) {
    cy.get('#metaDescription').type('{selectall}{del}' + metadataDescription, {force: true});
    clicOnGeneraPageSaveButton();
}

export function verifyMetaDescription(metadataTitle, metadataDescription) {
    cy.reload();
    expandMetadata();
    cy.get('#metaTitle').should('have.value', metadataTitle);
    cy.get('#metaDescription').should('have.value', metadataDescription);
}