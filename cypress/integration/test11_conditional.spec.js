
// Testowanie warunkowe odnosi się do wspólnego wzorca programowania:

// if (jeżeli) X, then (to) Y, else (a jeżeli nie to) Z

describe('Conditional testing', () => {

    it('Conditional testing', () => {

        cy.visit('https://helion.pl/')

        cy.get('body').then($body => {
            if ($body.find('').lenght > 0) {
                cy.get(':nth-child(1)> .ant-btn').click({ force: true })
            }
            else {
                cy.wait(1000)

            }
        });

        // cy.get('button').then(($btn) => {
        //     if ($btn.hasClass('active')) {
        //         // do something if it's active
        //     } else {
        //         //do something else
        //     }
        // })
        // })

        cy.get('body').then(($body) => {
            if ($body.text().includes('Koszyk')) {
                cy.get("#koszykbox").click()

            }
            else {
                cy.log("Nie ma Koszyka")

            }
        })
    });
});





