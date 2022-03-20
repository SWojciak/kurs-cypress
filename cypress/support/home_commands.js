import HomePage from "../support/Lokatory/home_page_locators"


Cypress.Commands.add('signInClick' , () =>{

const homePage = new HomePage()
homePage.sign_in_button().click()


})
