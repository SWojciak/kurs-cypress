/// <reference types="cypress" />


describe('', () => {

    it("", () => {

        cy.visit('https://helion.pl/')
        cy.get('#linkCatalog > a').click()
        cy.wait(200)
        cy.get('.left-menu-container').find('li').then(listing => {

            const listingCount = Cypress.$(listing).length
            cy.log(listingCount)

        })


    })


});