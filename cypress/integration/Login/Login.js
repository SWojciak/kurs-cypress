import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given('User is at the login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

When('User enters username and password', () => {
    cy.get('#txtUsername').type("Admin")
    cy.get('#txtPassword').type("admin123")
})

And('User clicks on login button', () => {
    cy.get('#btnLogin').click()
})

Then('User is able to successfully login to the Website', () => {
    cy.get('#welcome').should('be.visible', { timeout: 10000 })
})
