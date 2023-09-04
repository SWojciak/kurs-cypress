Cypress.Commands.add('zalogowanie', (email, password) => {

    cy.get('[name="email"]').type(email)
    cy.get('[name="password"]').type(password)
    cy.get('#log_in_submit').click()


})