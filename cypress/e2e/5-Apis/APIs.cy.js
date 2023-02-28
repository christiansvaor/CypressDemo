describe('Pruebas en API con Cypress', () => {

    /*it("Endpoint debe responder con status 200", () => {
        //cy.visit('https://jsonplaceholder.typicode.com');
        cy.request({
            url:'https://jsonplaceholder.typicode.com/posts'
        }).then((respuesta)=>{
            expect(respuesta.status).to.eq(200);
        })
    })

    it('El endpoint tiene 100 entradas', () => {
        cy.visit('https://jsonplaceholder.typicode.com');
        cy.request('/posts').its('body').should('have.length', 100);
    })

    it('Post numero uno con titulo X', () => {
        cy.visit('https://jsonplaceholder.typicode.com');
        cy.request('/posts/1').its('body').should('have.property', 'title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
    })

    it('Post en endpoint', () => {
        //cy.visit('https://jsonplaceholder.typicode.com');
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            userID:1,
            id:101,
            title: 'Relato',
            body: 'Peliculon'
        }).then((response)=>{
            expect(response.body).to.have.property('title', 'Relato');
        })
    })

    it('put en endpoint', () => {
        //cy.visit('https://jsonplaceholder.typicode.com');
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/2', {
            userID:1,
            id:101,
            title: 'Relato',
            body: 'Peliculon'
        }).then((response)=>{
            expect(response.body).to.have.property('title', 'Relato');
        })
    })*/

    it('Delete', () => {
        //cy.visit('https://jsonplaceholder.typicode.com');
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
    })
})