/// <reference types= "cypress" />

describe('Test', () => {

    it('test', () => {

        cy.visit("dynamic_loading/1")


        cy.get('button').then((przycisk) => {

            cy.get(przycisk).click()
        })

    });
});