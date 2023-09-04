/// <reference types="cypress" />

class HomePage {

    sign_in_button() 
    {
        return cy.get('#helloUser')

    }

}

export default HomePage