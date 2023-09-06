
/// <reference types="cypress" />

describe('console', () => {

    it('console', () => {

        cy.visit("http://demo.automationtesting.in/Register.html")

        cy.get('#Skills').select("Java")

        cy.get('.select2-selection').click().then(() =>{
        // cy.wait(200)
        cy.get('.select2-results__options').find(".select2-results__option").contains("Denmark").click()
    })
    })

});
