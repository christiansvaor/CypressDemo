describe('pruebas de ifremae', () => {
    it('Validando texto del iframe', () => {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html');
        cy.get('#frame').iframe('body #button-find-out-more > b').should('include.text', 'Find Out More!');
    })
})