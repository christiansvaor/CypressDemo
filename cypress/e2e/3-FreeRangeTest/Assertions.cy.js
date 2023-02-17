describe('Validaciones implicitas y explicitas', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com');
    })

    it('Validaciones implictas', () => {
        cy.contains("Inputs").click();
        cy.get('h3').should('have.text', 'Inputs');
        cy.get('.example')
        .should('have.class','example')
        .and('be.visible');
    })

    it('Validaciones implictas', () => {
        cy.contains("Inputs").click();
        cy.get('h3');
        expect('Inputs').to.equals('Inputs');
    })

    it.only('Espera a que las promesas se resuelvan', () => {
        let waited=false;

        function waitOneSecond() {
            return new Cypress.Promise((resolve, reject) => {
                
                setTimeout(() => {
                    waited = true;
                    resolve('foo');
                }, 1000)
            })
        }

        cy.wrap(null).then(() =>{
            return waitOneSecond().then((str) => {
                expect(str).to.eq('foo');
                expect(waited).to.be.true;
                
            })
        })
    })
})