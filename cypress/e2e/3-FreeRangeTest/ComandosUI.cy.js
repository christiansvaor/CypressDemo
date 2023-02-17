describe('Pruebas sobre UI 2', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com');
    })

    it("Ejemplo de click", () => {
        cy.contains("Add/Remove Elements").click();
        cy.get('button').click();
        cy.contains('Delete').click();
    })

    it("Type example", () => {
        cy.contains("Form Authentication").click();
        cy.get('#username').type("tomsmith");
        cy.get('#password').type("SuperSecretPassword!");
        cy.get('.fa').click();
    })

    it("Checkboxes", () => {
        cy.contains("Checkboxes").click();
        cy.get('#checkboxes > :nth-child(1)').check();
        cy.get('#checkboxes > :nth-child(3)').uncheck();
    })

    it("Dropdown", () => {
        cy.contains("Dropdown").click();
        cy.get('#dropdown').select(1);
    })

    it("Clear", () => {
        cy.contains("Form Authentication").click();
        cy.get('#username').type("tomsmith");
        cy.get('#password').type("SuperSecretPassword!").clear();
        cy.get('.fa').click();
    })

    it("Hover", () => {
        cy.contains("Hovers").click();
        cy.get("#content > div > div:nth-child(4) > div > a").click({force:true});
    })

    it.only("Right-click", () => {
        cy.contains("Context Menu").click();
        cy.get('#hot-spot').rightclick();
        //cy.get('#hot-spot').invoke("trigger", "contextmenu");
        cy.on("window:alert", (alert) => {
            expect(alert).to.equal("You selected a context menu");
        })
    })
})