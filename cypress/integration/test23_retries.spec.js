/// <reference types= "cypress" />

describe('test retries', () => {
    it('test retries', {
        retries: {
            runMode: 2,
            openMode: 4,
        },
    }, () => {

        cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1")

        cy.get('inny').click()

       


    });

});

