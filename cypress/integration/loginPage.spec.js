//import LoginPage from '../../support/pages/LoginPage.js' ;
const LoginPage = require('../support/pages/LoginPage.js');
const loginPage = new LoginPage();

const SuccessfullLogin = require('../support/pages/SuccessfullLogin.js');
const succLogin = new SuccessfullLogin();

const userNames = {
    validUserName : 'student',
    invalidUserName : 'teacher'
}

const passwords = {
    validPassword : 'Password123',
    invalidPassword : 'Pasword12'
}


context('Trying to Login', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    });

    it('Successfull Login', ()=>{
        loginPage.addUserName(userNames.validUserName);
        loginPage.addPassword(passwords.validPassword);
        loginPage.clickSubmit();

        cy.url().should('include', succLogin.getURL());
        cy.get(succLogin.getLoginTitle()).invoke('text').then(text =>{
            const lowerCaseText = text.toLowerCase();
            expect(lowerCaseText).to.include('successfully');
            expect(lowerCaseText).to.include('logged');
            expect(lowerCaseText).to.include('in');
        })
        cy.get(succLogin.getButtonLogOut()).should('be.visible')
    })

    it('Invalid Username', ()=>{
        loginPage.addUserName(userNames.invalidUserName);
        loginPage.addPassword(passwords.validPassword);
        loginPage.clickSubmit();

        cy.get('#error').should('be.visible').and('contain', 'Your username is invalid!');
    })

    it('Invalid Password',()=>{
        loginPage.addUserName(userNames.validUserName);
        loginPage.addPassword(passwords.invalidPassword);
        loginPage.clickSubmit();

        cy.get('#error').should('be.visible').and('contain', 'Your password is invalid!');
    })
})