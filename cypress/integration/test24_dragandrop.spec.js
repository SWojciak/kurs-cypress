/// <reference types="cypress" />

describe('Test drag and drop', () => {

    it('Test z plugami drag and drop', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#draggable').drag('#droppable', { force: true })

    });

    it.only('Test drag and drop z użyciem data transfer', () => {

        const dataTransfer = new DataTransfer;

        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")

        cy.get('#column-a')
            .should('have.text', 'A')
        cy.get('#column-b')
            .should('have.text', 'B')

        cy.get('#column-a')
            .trigger('dragstart', { dataTransfer });

        cy.get('#column-b')
            .trigger('drop', { dataTransfer });

        cy.get('#column-a')
            .should('have.text', 'B')
        cy.get('#column-b')
            .should('have.text', 'A')
    });
});