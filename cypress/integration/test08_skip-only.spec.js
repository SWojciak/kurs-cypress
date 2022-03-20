/// <reference types= "cypress" />

describe("Skip and only", () => {

    it("Test 01", () => {
        cy.log("Test 01");
    });

    it('Test 02', () => {
        cy.log("Test 02");
    });

    it.skip('Test 03', () => {
        cy.log("Test 03");
    });

    it('Test 04', () => {
        cy.log("Test 04");
    });
});
