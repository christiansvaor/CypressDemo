describe("Prueba de login", () =>{
    it('Login de admin', () => {
        cy.visit('https://portal-testing.orbetransportes.com/ORBE');
        cy.get(':nth-child(1) > .form-control').type('admin@example.com');
        cy.get('.input-group-merge > .form-control').type('password');
        cy.get('.login-mobile-button').click();
        cy.wait(6000);
        cy.get('.user-status').should('include.text', 'Admin');
    })
})