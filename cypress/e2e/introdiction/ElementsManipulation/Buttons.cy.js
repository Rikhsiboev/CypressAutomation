describe('Buttom Elements Multiple',()=>{
    beforeEach(()=>{
        cy.log('runs before each test case');
        cy.clearCookies();
        cy.visit("/multiple_buttons");
    })

    it('Check Different Buttom Locators and Actions',()=>{
            // locate an element with text and do action on it 
            cy.contains('Button 2').should('be.visible').click();
            // assert that we clicked
            cy.contains('Clicked on button two!').should('be.visible');

            //located all buttons with class attribute and select  button 3 and click

            cy.get('.btn.btn-primary').then((button)=>{
                cy.wrap(button).eq(2).click();
                cy.contains('Clicked on button three!').should('be.visible');
            })


            // locate all buttons with tagName then verify each of them has attribute of onclick
            cy.get('button').each((item,index,list)=>{
                // verify we have 6 button 
                expect(list).to.have.length(6);
                expect(item).to.have.attr('onclick');

            })
    })

    it('Verefy element text of buttons',()=>{
        // Select all Buttons and Verify Text Then Click
        cy.get('button').each((item)=>{
            if(item.text()=== 'Button 4'){
                cy.wrap(item).click();
                cy.contains('Clicked on button four!');
            }
        })
    })





})