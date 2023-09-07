// <reference types="cypress"> />

describe('Zmienne srodowiskowe' , () => {

it('Zmienne srodowiskowe' , () => {

cy.visit("login")
cy.get('#username').type(Cypress.env("username"), {log: false})
cy.get('#password').type(Cypress.env("password"), {log: false})
cy.get('.radius').click()

cy.get('#flash').should("be.visible").and("contain.text", "You logged into a secure area!")
cy.log("Koniec Testu")


});
});
