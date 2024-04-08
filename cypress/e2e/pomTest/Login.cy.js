import { navigateTo } from "../../support/pages/Navigation.cy";
import { auth } from "../../support/pages/Auth.cy";
const LoginLocaters = require('../../support/pages/Auth.cy')

describe('auth: Login user with defferent ways', ()=> {

    beforeEach(()=>{
       cy.clearAllCookies();
       navigateTo.loginPage(); // called it from page object model 
    })

    it('Happy path login scenario',() => {
       cy.fixture('user').then((user)=>{
        auth.login(user.user2.username,user.user2.password)
       })
       cy.textExists('You logged into a secure area!');
    
    })

    it('Happy path login scenario with Locater',() => {
      cy.fixture('user').then((user)=>{
         LoginLocaters.locatars.userName.type(user.user2.username);
         LoginLocaters.locatars.password.type(user.user2.password);
         LoginLocaters.locatars.submit.click();
      })
   
   
   })

})