describe('Cypress File Upload Test', ()=> {

    it('Verify file upload ',() => {
        cy.visit('/upload');
   /*
    * 1. npm install -dev cypress-file-upload
    * 2. import function 
    * 3. add file to fixture
    */ 
   cy.get('#file-upload').attachFile('pic.webp');
   cy.get('#file-submit').click();
   // assert that it is uploaded 
   cy.get('#uploaded-files').then(()=>{
       cy.contains('pic.webp').should('be.visible');
   })

 })

 
})