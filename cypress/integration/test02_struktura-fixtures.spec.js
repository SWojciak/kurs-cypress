cy.visit('/')
cy.get("#username").type(Cypress.env('username'))