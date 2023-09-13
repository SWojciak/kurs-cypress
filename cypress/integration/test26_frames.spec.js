
describe('iframes', () => {

it('iframes' , () => {

    cy.visit('http://the-internet.herokuapp.com/iframe')
    // cy.get("#mce_0_ifr").type("tekst testowy")
    cy.get("iframe")
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)
    .should('contain.text' , "Your content goes here.")
    .clear()
    .type("przykładowy tekst")


})
});