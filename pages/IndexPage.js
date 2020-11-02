import { Selector, t } from 'testcafe';

class IndexPage{
    
    constructor()
    {
        this.usernameInput = Selector('#user-name')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('#login-button')
        this.errorMessage = Selector('#login_button_container div form h3')
    }

   async enterUser(username)
   {
       await t 
       .typeText(this.usernameInput, username)
   }

   async enterPass(password)
   {
       await t
       .typeText(this.passwordInput, password)
   }
   
   async clickLoginButton() 
   {
        await t
        .click(this.loginButton)
   }
   
   async validateErrorMessage(errorMessage)
   {
        await t
        .expect(this.errorMessage.innerText).eql(errorMessage)
   }

   async validateLoginPage()
   {
       await t
       .hover(this.usernameInput)
   }
   
   async loginSaucedemo(user,pass)
   {   
        if(user != "")
            await this.enterUser(user)
        if(pass != "")
            await this.enterPass(pass)
        await this.clickLoginButton()
   }
    
}

export default new IndexPage();