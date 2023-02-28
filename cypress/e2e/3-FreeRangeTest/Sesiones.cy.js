describe('Sesiones', function () {

    it('Sin sesion guardada', function () {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('form').contains('Login').click();
        cy.url().should('contain', '/secure');
    })

    it('clear cookies', function () {
        cy.session('Tom', () => {
            cy.visit('https://the-internet.herokuapp.com/login');
            cy.get('#username').type('tomsmith');
            cy.get('#password').type('SuperSecretPassword!');
            cy.get('form').contains('Login').click();
            cy.url().should('contain', '/secure');
            cy.getCookies().should('have.length', 6).then((cookies) => {
                expect(cookies[0]).to.have.property('name', 'optimizelyPendingLogEvents');
            });
        })
        cy.clearCookies();
        cy.getCookies().should('have.length', 5);
    })

    it('get cookie', function () {
        cy.session('Tom', () => {
            cy.visit('https://the-internet.herokuapp.com/login');
            cy.get('#username').type('tomsmith');
            cy.get('#password').type('SuperSecretPassword!');
            cy.get('form').contains('Login').click();
            cy.url().should('contain', '/secure');
            cy.getCookie('optimizelyPendingLogEvents').should('exist');
            cy.getCookie('optimizelyPendingLogEvents').should('not.have.property', 'value', '123');
        })
    })
})