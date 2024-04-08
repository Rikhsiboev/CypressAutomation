
describe('Find or get Elements by Using Defferent Locators',()=>{
    beforeEach('Navigate to login Page ', ()=>{
        cy.clearCookies();
        cy.visit('/login')
    })

    it('Check Different Locator Strategies', ()=>{
        // by CSS locater 
        // cy.get("input=['username']")  //this statment create an object that can be changed 
        cy.get("input[name='username']").type('BobStudent');

        // locate the element with attribute name and value then clear the box 
        cy.get("[type='text']").clear();

        // when you get multiple elements with tagName tag 
        cy.get('input').each((item,index,list)=>{
            expect(list).to.have.length(2);
            expect(item).to.have.attr('type');
        })

        // located login buttom with text 
        cy.get('button').should('contain','Login').click();
    })

    it('Check finding elements by traveling through Dom',()=>{
        // locate username box, go up to parent form then navigate 
        cy.get("input[name='username']")
        .parents('form')
        .find('button')
        .should('contain','Login')
        .click();
    })

    it('Check different Type of Assertions', ()=>{
        // implicit: Should Assertions 
        cy.get('#wooden_spoon').should('contain','Login').and('have.class','btn btn-primary');

        // explicit expect() Assertions 
        cy.get('#wooden_spoon').then((buttonElemnt)=>{
            expect(buttonElemnt).to.have.text('Login');
            expect(buttonElemnt).to.have.class('btn btn-primary');
        })
    })
})