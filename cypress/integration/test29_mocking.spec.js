/// <reference types= "cypress" />

describe('Test intercept i mocking', () => {

    it('Intercept', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("[name='username']").type("Admin")
        cy.get("[name='password']").type("admin123")

        cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations").as("locations")
        cy.get('.oxd-button').click()
        cy.wait("@locations")
    });

    it.only('Test mocking' , () => {

    cy.fixture("tags.json").then((tags) =>{

    cy.intercept('GET' , "https://api.realword.io/api/tags" , tags )
    cy.visit("https://react-redux.realworld.io/")
    })
    });

});