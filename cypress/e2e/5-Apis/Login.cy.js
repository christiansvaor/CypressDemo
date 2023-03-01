describe('Pruebas de log', () =>{
    
    it('Prueba sin log', () =>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth');
        cy.get('p').should('include.text', 'Congratulations');
    })

    it('Log con auth de cypress', () =>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth:{
                username:'admin',
                password:'admin'
            }
        });
        
        cy.get('p').should('include.text', 'Congratulations');
    })

    it('Log con url', () =>{
        cy.visit('admin:admin@https://the-internet.herokuapp.com/basic_auth');
        
        cy.get('p').should('include.text', 'Congratulations');
    })

    it('Log con un form usando POST', () => {
        cy.visit('https://the-internet.herokuapp.com')
        cy.request({
            method:'POST',
            url:'/authenticate',
            form: true,
            body: {
                username: 'tomsmith',
                password: 'SuperSecretPassword!',
            }
        });
        cy.getCookie('rack.session').should('exist');
        cy.visit('https://the-internet.herokuapp.com/secure');
        cy.get('.subheader').should('include.text', 'Welcome to the Secure Area');
    })

    it.only('El de arriba pero diferente', () => {
        cy.login();
        cy.get('.subheader').should('include.text', 'Welcome to the Secure Area');
    })
})