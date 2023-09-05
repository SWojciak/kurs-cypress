/// <reference types= "cypress" />

describe('clock function', () => {
    it('clock function', () => {

        cy.visit("https://the-internet.herokuapp.com/dynamic_loading")
        cy.clock()
        cy.get('[href="/dynamic_loading/1"]').click()
        cy.get('button').click()
        cy.tick(12000)
        cy.get('#finish > h4').should('be.visible').and("contain.text", "Hello World!")


    });

});
