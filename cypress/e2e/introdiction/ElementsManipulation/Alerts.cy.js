describe('Testing Alerts in Cyprus Env',{baseUrl: "https://demoqa.com/" } , ()=> {
    
    beforeEach(()=>{
        cy.log('runs before each test case');
        cy.clearCookies();
        cy.visit("/alerts");
    })


    it('Check Alert Confirmation',() => {
        /*
        * Brower Commands: windows: alert,window: confirmation, windows: on etc
        */
       const stub = cy.stub();
       cy.on('window:confirm',stub);  // this action store conormation into stub function 
        cy.get('#confirmButton')
        .click()
        .then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?')
        });
        cy.on('window:confirm',()=>true);
        cy.contains('You selected Ok').should('be.visible');
        })

        it('Check Alert Cancel',() => {
           
           const stub = cy.stub();
           cy.on('window:confirm',stub);  // this action store conormation into stub function 
            cy.get('#confirmButton')
            .click()
            .then(()=>{
                expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?')
            });
            cy.on('window:confirm',()=>false);
            cy.contains('You selected Cancel').should('be.visible');
            })

    })



