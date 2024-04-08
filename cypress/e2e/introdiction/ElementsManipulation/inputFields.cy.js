
describe('Different Type input Field Tests',()=>{
    beforeEach('Navigate to login Page ', ()=>{
        cy.clearCookies();
        cy.visit('/registration_form')
    })
    /// INPUT BOX 
    it('Input Boxes', ()=>{
        cy.get('input[name="firstname"]').type('Bob');
        cy.get('input[name="firstname"]').type('Rrrrr');
        cy.get('input[name="username"]').type('Brrrrr')
        cy.get('input[name="email"]').type('testuser123@gmail.com')
        cy.get('input[name="password"]').type('BrTest123')
        cy.get('input[name="phone"]').type('555-000-1234')
    })
    // CHEKED BOX 
    it('Check different radio buttom action',()=>{
        cy.get('.radio')
        .find('[type=radio]')
        .then((radioButtons)=>{
            // get all radio button find first one and check it and assertion that
            cy.wrap(radioButtons).first().check().should('be.checked');
            // using index of elements then check and verify 
            cy.wrap(radioButtons).eq(1).check().should('be.checked');
            // Verify that one not checked
            cy.wrap(radioButtons).eq(2).should('not.be.checked');
        })
    })

    it('Check different Type of CheckbBox Actions', ()=>{
        cy.get('[type="checkbox"]').then((checkbox)=>{
            // check Java box and verify 
            cy.wrap(checkbox).eq(2).check().should('be.checked');
             // uncheck and assert unchecked 
            cy.wrap(checkbox).eq(2).uncheck().should('not.be.checked');
            // verify that third box value is JavaScript than check and assined 
            cy.wrap(checkbox).eq(2).should('have.value','javascript').check();
        })
    })

    // DROPDOWN 
    it('Check Select DropDown and select a single choice', ()=>{
        // locate top select menu locator then use select function
    cy.get('select[name="job_title"]').select('SDET');
        // locate the same menu again and verify the value contains SDET
        cy.get('select[name="job_title"]').contains('SDET').should('have.value','SDET');

    })

     // DROPDOWN Deparmant and we are creating and adding own deparment 
     it('Check all of theSelect DropDown Option', ()=>{
         cy.fixture('departments').then((deparments)=>{
            cy.get('select[name="department"] > option').each((option,index,allOptions)=>{
                // get each option text 

                const optionText = option.text();
                cy.get('select[name="department"]')
                .select(optionText)
                .should('have.value',option.val())
                .contains(deparments[index]);
            })
         })       

    })
})