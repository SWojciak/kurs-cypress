it('struktura', () => {
    cy.visit('/')
    cy.get("#gh-ac").type(Cypress.env('username'))
});