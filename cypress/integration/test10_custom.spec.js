/// <reference types="cypress" />

import HomePage from "../support/Lokatory/home_page_locators"

describe('Test custom commands', () => {

    it('Test custom comands', () => {

        const homePage = new HomePage

        cy.visit('http://a.testaddressbook.com/')
        homePage.sign_in_button().click()
    });

});