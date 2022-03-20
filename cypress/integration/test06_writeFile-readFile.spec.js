/// <reference types="cypress"  />

describe("Korzystanie z fixtures file", () => {

    it("cy.fixture", () => {

        cy.visit('https://the-internet.herokuapp.com/login')
        cy.fixture("testdata").then(function (testdata) {
            this.testdata = testdata

            cy.get('#username').type(this.testdata.username)
            cy.get("#password").type(this.testdata.password)
            cy.get('.radius').click()
        })

        it('cy.writeFile oraz cy.readFile', () => {

            cy.visit('https://the-internet.herokuapp.com/login')
            cy.fixture("testdata").then(function (testdata) {
                this.testdata = testdata

                cy.get('#username').type(this.testdata.username)
                cy.get("#password").type(this.testdata.password)
                cy.get('.radius').click()

            })
        });
    })
});
