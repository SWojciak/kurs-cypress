/// <reference types= "cypress" />
/// <reference types="cypress-downloadfile"/>

describe('upload file', () => {

    it.skip('upload file', () => {

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('kaczucha.png')
        cy.get("#file-submit").click()
        cy.get('#uploaded-files').should("be.visible").and("contain.text", "kaczucha.png")
        cy.get('h3').should("be.visible").and("contain.text", "File Uploaded!")

    });

    it('download file', () => {

        cy.visit("https://the-internet.herokuapp.com/download")
        cy.downloadFile('https://the-internet.herokuapp.com/download/kaczucha.png',
            'cypress/fixtures/', 'test.png')

    });
});

// https://www.npmjs.com/package/cypress-file-upload