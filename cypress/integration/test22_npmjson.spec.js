/// <reference types= "cypress" />

describe('Conditional testing' , () => {

// production@wp.pl hasło: 12345678
// staging@wp.pl hasło: 12345678

it('Conditional testing' , () =>{

    cy.visit('/index.php')
    cy.get('.login').click()
    cy.get('#email').type(Cypress.env("username"))
    cy.get('#passwd').type(Cypress.env("password"))
    cy.get('#SubmitLogin > span').click()
})


})