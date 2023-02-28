describe('Tablas estáticas y dinámicas', function () {
    it('Validation of text in static table', function(){
        //ir a tabla
        cy.visit('https://the-internet.herokuapp.com/tables');
        //primer columna
        cy.get('#table1 > tbody > tr > td:nth-child(1)').each(($elm, index, $list)=>{
            const t = $elm.text();
            if(t.includes('Selenium')){
                cy.get('#table1 > tbody > tr > td:nth-child(1)').eq(index).next().then(function(p){
                    const r = p.text();
                    expect(r).to.contains('Commercial');
                })
            }
        })
    })
})