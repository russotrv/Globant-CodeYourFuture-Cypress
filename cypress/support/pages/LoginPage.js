var pageLocators = {
    inputUserName : 'input#username',
    inputPassword : 'input#password',
    buttonSubmit : 'button#submit'
}

class LoginPage{
    userLocator(){ return cy.get(pageLocators.inputUserName); }
    passwordLocator(){ return cy.get(pageLocators.inputPassword); }
    submitLocator(){ return cy.get(pageLocators.buttonSubmit); }

    addUserName(user){ return this.userLocator().type(user); }
    addPassword(pass){ return this.passwordLocator().type(pass); }
    clickSubmit() { return this.submitLocator().click(); }
}

export default LoginPage;