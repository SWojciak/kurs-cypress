/// <reference types="cypress" />

class HomePage {

    sign_in_button() 
    {
        return cy.get('#sign-in')

    }

}

export default HomePage