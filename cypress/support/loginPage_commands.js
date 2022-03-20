Cypress.Commands.add('zalogowanie', (email, password) => {

    cy.get('#session_email').type(email)
    cy.get('#session_password').type(password)
    cy.get('[data-test="submit"]').click()
    
    
    })