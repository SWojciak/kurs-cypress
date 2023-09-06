/// <reference types= "cypress" />

describe('invoke function', () => {

    it('invoke function', () => {

        cy.visit("https://the-internet.herokuapp.com/hovers")

        cy.get('.figcaption').first().invoke('show')
        cy.get('#content > div > div:nth-child(3) > div > h5').should('be.visible').and('have.text', "name: user1")
        // cy.get(':nth-child(3) > .figcaption > a').click({force: true})

    });

});