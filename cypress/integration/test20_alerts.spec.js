/// <reference types="cypress" />

describe('Alerts', () => {

    it('Alerts', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        //#1
        cy.get(':nth-child(1) > button').click()
        cy.get(':nth-child(2) > button').click()

        //#2
        cy.on("window:alert", (str)=>{

            expect(str).to.equal("I am a JS Alert")
        })


        cy.on("window:confirm" , (str)=>{

            expect(str).to.equal("I am a JS Confirm")
        })
    });
});
