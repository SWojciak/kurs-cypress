describe('Conditional testing', () => {


    it('each method', () => {


        cy.visit('https://helion.pl/')
        cy.get('#linkCatalog > a').click()
        cy.wait(200)
        cy.get('.left-menu-container').find('.kategorieGlowne').each(($el, index, $list) => {

            const textElement = $el.find("a").text()
            cy.log(index + '. ' + textElement)
            if (textElement.includes("Gry+")) {
                cy.log("!!!Mamy kategorie gry!!!")
            }
        })

        cy.get('.main-menu').find('li').each(($el, index, $list) => {

            const textElement = $el.find("a").text()
            cy.log(index + '. ' + textElement)
            if (textElement.includes("Audiobooki")) {
                cy.log("!!!Mamy kategorie Audiobooki!!!")
            }
        })

    });



});