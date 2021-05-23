import {Url} from '../credencia'

export function login(cy,email,password,escenario) {
  cy.visit(Url+"/ghost/#/signin");
  cy.get(".email").type(email);
  cy.get(".password").type(password);
  cy.get(".login").click();
  
  if(escenario!=='NO'){
    cy.wait(5000);
    cy.screenshot(escenario)
  }
}

export function loginEmptyFill(cy,email,password,escenario) {
  cy.visit(Url+"/ghost/#/signin");
  
  if(email!=''){
    cy.get(".email").type(email);
  }
  if(password!=''){
    cy.get(".password").type(password);
  }
  cy.get(".login").click();
  if(escenario!=='NO'){
    cy.wait(5000);
    cy.screenshot(escenario)
  }else{
    cy.wait(3000);
  }
  
  cy.get(".main-error").contains('Please fill out the form to sign in.')

}

export function loginFailPassword(cy,email,password,escenario) {
  cy.visit(Url+"/ghost/#/signin");
  cy.get(".email").type(email);
  cy.get(".password").type(password);
  cy.get(".login").click();
  if(escenario!=='NO'){
    cy.wait(5000);
    cy.screenshot(escenario)
  }else{
    cy.wait(3000);
  }
  cy.get(".main-error").contains('Your password is incorrect.')

}
