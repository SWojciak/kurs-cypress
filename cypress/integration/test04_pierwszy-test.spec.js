/// <reference types="cypress"  />

describe('Wyszukiwanie produktu na stronie', () => {

    it('Powinien wyszukać produkt', () => {

        cy.visit('https://www.ebay.pl/')
        cy.get('#gh-ac').type('swetr')
        cy.get('#gh-btn').click()
        cy.get('.srp-results.srp-list.clearfix')
            .find('.s-item')
            .first()
            .should('be.visible')


    });

});



