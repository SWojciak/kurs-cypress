import HomePage from "../support/Lokatory/home_page_locators"
import SignIn from "../support/Lokatory/sign_in_locators"

describe('Test custom commands', () => {

    const homePage = new HomePage()
    const signIn = new SignIn()

    it('Test custom commands', () => {


        cy.visit('https://helion.pl/')
        cy.get('#helloUser').click()
        cy.zalogowanie('test12345@wp.pl', '12345678')

        cy.get('#helloUser').as("login")


        cy.intercept("GET" , "https://helion.pl/api/users/info").as("requestLogin")
        cy.get("@login").click();
        cy.wait ("@requestLogin").its('response.statusCode').should('be.equal' , 200)


    });
});
