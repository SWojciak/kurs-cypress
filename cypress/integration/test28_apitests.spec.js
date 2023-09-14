/// <reference types= "cypress" />


describe('API Tests', () => {

    it('API Tests', () => {

        cy.request("GET", "https://reqres.in/api/users?page=2").then((response) => {

            expect(response.status).eq(200)
            expect(response.duration).below(1000)
            expect(response.body.data).to.have.length(6)
            cy.writeFile("cypress/fixtures/uzytkownicy.json", { uzytkownicy: response.body.data })

        })

    });
    it.only('Register new user', () => {

        cy.request({

            method: 'POST',
            url: "https://reqres.in/api/register",
            body: {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
        }).then((response) => {

            expect(response.status).eq(200)
            expect(response.duration).below(1000)
            expect(response.body).to.have.property("id")
            expect(response.body).to.have.property("token")

            cy.writeFile('cypress/fixtures/New_Register.json', { id: response.body.id, token: response.body.token })
        })
    });


    it('Test create new user', () => {

        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                "name": "Sylwia",
                "job": "Tester"
            }

        }).then((response) => {
            expect(response.status).eq(201)
            expect(response.duration).below(1000)
            expect(response.body).to.have.property("createAt")
            expect(response.body).to.have.property("id")
            expect(response.body).to.have.property("job").eq("Tester")
            expect(response.body).to.have.property("name").eq("Sylwia")
        })


    });


    it.only('Test złe logowanie', () => {

        cy.request({
            method: "POST",
            url: "https://reqres.in/api/login",
            body: {
                "email": "peter@klaven"
            },
            failOnStatusCode: false
        }).then((response) =>{
            expect(response.status).eq(400)
            expect(response.duration).below(1000)
            expect(response.body).to.have.property("error").eq("Missing password")
    })

    });
});