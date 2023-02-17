describe('Home www.freerangetesters.com', () => {
    beforeEach(() => {
        cy.visit('https://www.freerangetesters.com/')
    })

    it('should have a title', () => {
        cy.title().should('include', "Free Range Testers");
        cy.xpath('//*[@id="comp-l02x1m8d2label"]').click();
        cy.contains('Iniciar Sesión');
    })

    it('Hay 12 cursos para ver mas', () => {
        cy.get('#comp-l02x1m8d2label').click();
        cy.get('[data-testid="linkElement"] > .M3I7Z2').should('have.length', 5);
    })

    /*it('El campo nombre del formulario posee clase algo', () =>{
        cy.get('#input_comp-l1ed927d').should('have.class', 'KvoMHf has-custom-focus wixui-text-input__input focus-within');
    })*/

    it('Hay un link llamado Blog en la barra de navegacion', () =>{
        cy.get('#comp-l02x1m8d1label').should('have.text', 'Blog');
    })

    it('Existe un botón de Empezá a aprender en home', () => {
        cy.get('#comp-krjarw4p > [data-testid="linkElement"] > .M3I7Z2').should('exist');
    })
})