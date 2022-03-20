/// <reference types="cypress" />

describe('Test custom commands', () => {

    const email = "test12345@wp.pl"
    const password = "12345678"

    it('Test custom comands', () => {

       

        cy.visit('http://a.testaddressbook.com/')
        cy.get('[data-test="sign-in"]').click()
        cy.zalogowanie(email,password)

    });


}); 