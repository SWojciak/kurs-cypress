/// <reference types= "cypress" />

describe('viewport', () => {

    it('viewport test', () => {

        cy.viewport("iphone-8")
        cy.visit("https://www.ebay.pl/")
        Cypress.config({defaultCommandTimeout: 5000})


    });

});