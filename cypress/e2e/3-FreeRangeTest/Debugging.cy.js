describe('Utilidades para debugging con cypress', () =>{
    it('cy.log', () =>{
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.log('Escribe el usuario');
        cy.get('#username').type('tomsmith');
        cy.log('Escribe la contraseña');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('form').contains('Login').click();
        cy.url().should('contain', '/secure');
    })

    it('cy.pause', () =>{
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username').type('tomsmith').pause();
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('form').contains('Login').click();
        cy.url().should('contain', '/secure').pause();
    })

    it.only('cy.debug', () =>{
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username').type('tomsmith');
        cy.get('#password').debug().type('SuperSecretPassword!');
        cy.get('form').contains('Login').click();
        cy.url().should('contain', '/secure');
    })
})