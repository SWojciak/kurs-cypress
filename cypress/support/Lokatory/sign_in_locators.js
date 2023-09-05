/// <reference types="cypress" />

class SignIn {

    email_input() 
    {
        return cy.get('#session_email')

    }

    password_input() 
    {
        return cy.get('#session_password')

    }


    sign_in_button() 
    {
        return cy.get('[data-test="submit"]')

    }

    signUp_btn() 
    {
        return cy.get('[data-test="sign-up"]')

    }

}

export default SignIn