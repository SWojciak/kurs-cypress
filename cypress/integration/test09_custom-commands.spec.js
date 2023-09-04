/// <reference types="cypress" />

describe('Test custom commands', () => {

    const email = "test12345@wp.pl"
    const password = "12345678"

    it('Test custom comands', () => {

       

        cy.visit('https://helion.pl/')
        cy.get('#helloUser').click()
        cy.zalogowanie(email,password)

    });


}); 