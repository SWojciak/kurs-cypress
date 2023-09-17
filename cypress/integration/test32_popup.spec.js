/// <reference types= "cypress" />

describe('Zmiana okna', () => {

    it.skip('nowa karta', () => {

        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example > a').invoke("removeAttr", "target").click()
        cy.get('h3').should('be.visible').and("contain.text", "New Window")

    });

    it('Zmiana okna', () => {

        cy.visit("https://www.soccerstand.com/pl/")
        cy.get(':nth-child(1) > .event__info').click()

        cy.window()
            .then((win) => {
                win.location.href = "https://www.soccerstand.com/pl/tabela/jDTEm9zs/I3O5jpB2/#/I3O5jpB2/live";
            })
            .as("popup");
        cy.get("@popup").then(() => {
            cy.get(".tableCellParticipant__name").contains("Manchester City").should("be.visible")
        });
    });

});