
describe('Lokatory' , () => {

    it('Lokatory' , () => {

        cy.visit("https://www.ebay.pl/")
        //klasa
        cy.get(".gh-tb.ui-autocomplete-input")
        cy.get("[class='gh-tb ui-autocomplete-input']")
        
        //id
        cy.get("#gh-ac")
        cy.get("[id='gh-ac']")

        //atrybut name
        
        cy.get("[name='_nkw']")

        // atrybut placeholder

        cy.get('[placeholder="Wyszukaj coś"]')
        cy.contains('Moda')
        cy.get(".hl-cat-nav__js-tab").contains("Moda")
 });

});


