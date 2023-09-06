

describe('Checkboxes', () => {

    it('Checkboxes', () => {

        cy.visit("https://the-internet.herokuapp.com/checkboxes")

        // cy.get('#checkboxes > :nth-child(1)').check()
        cy.get('input[type="checkbox"]').first().check().should('be.checked').and("have.value", "on")
        cy.get('input[type="checkbox"]').last().uncheck()

        // cy.get('input[type="checkbox"]').check(["opttion1", "Option3"])

    });

});