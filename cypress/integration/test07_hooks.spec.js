/// <reference types="cypress" />

describe('Test hooks', () => {

    const username = "testUser88"
    const password = "123456789101112Ad!"

    beforeEach(() => {
        cy.visit('https://practice.automationbro.com/my-account/')
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get("button[name='login']").click()

    })



    it('Test1', () => {


        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain.text', username)

    })

    it('Test2', () => {


        cy.get('.woocommerce-MyAccount-navigation-link--dashboard > a').should('contain', "Dashboard")


    });

    after(() => {

        cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').click()
    })

});