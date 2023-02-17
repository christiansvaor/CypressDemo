describe("Pruebas UI", () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com');
    })
    
    it('Prueba de espera', () => {
        cy.wait(10000);
        cy.contains("Challenging DOM").click();
    })

    it('Nueva pestaña', () => {
        cy.contains("Multiple Windows").click();
        cy.contains('Click Here').invoke('removeAttr', 'target').click();
        cy.contains('New Window').should('have.text', 'New Window');
    })

    it('Shadow DOM', () => {
        cy.contains('Shadow DOM').click();
        cy.get('#content > :nth-child(4)').shadow().should('have.text', 'In a list!');
    })

    it('Primer y ultimo elemento', () => {
        cy.contains('Dynamic Content').click();
        cy.get('img').eq(2).should('be.visible');
    })

    it('Padres e hijos', () => {
        cy.contains('Dynamic Content').click();
        cy.get(':nth-child(4) > .large-2 > img').parent();
        cy.get('.example > :nth-child(7)').children();
    })

    it.only('Invoke', () => {
        cy.contains('Dynamic Content').should('be.hidden').invoke('show').should('be.visible');
    })
})
