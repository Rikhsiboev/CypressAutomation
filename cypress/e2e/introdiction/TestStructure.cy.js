describe('Constext: My first Test Group', ()=> {

    before(()=>{
        cy.log('runs once before all test cases ');
    })

    after(()=>{
        cy.log('runs once after all etst cases in this describe block ');
    })

    beforeEach(()=>{
        cy.log('runs before each test case');
    })

    afterEach(()=>{
        cy.log('runs after each test case');
    })

    it('Opening a web application',() => {
        cy.visit('/registration_form');
    })

    it('Test2 for Equals for false',()=>{
        expect(false).to.equal(false);
    })

    it('Tets3 for equals true',()=>{
        expect(true).not.to.equal(false);
    })

    it('Tets4 for not equals true',()=>{
        expect(false).not.to.equal(true);
    })

    it('Tets5 5 equals 5',()=>{
        expect(5).to.equal(5);
    })
    it('Tets6 equals 5',()=>{
        expect(true).to.equal('5'==5);
    })
    // it.skip xit   it.only

})