/// <reference types= "cypress" />

describe('Test', () => {

    it('test', () => {

        cy.visit("dynamic_loading/1")


        cy.get('button').then((start) => {

            const startButtonText = start.text();
            cy.log(startButtonText)
        });





    });
});