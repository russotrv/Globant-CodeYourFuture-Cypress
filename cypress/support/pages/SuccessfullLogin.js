var pageLocators = {
    url : 'practicetestautomation.com/logged-in-successfully/',
    loginTitle : '.post-title',
    buttonLogOut : '.wp-block-button__link'
}

class SuccessfullLogin{
    getURL(){ return pageLocators.url; }
    getLoginTitle(){ return pageLocators.loginTitle; }
    getButtonLogOut(){ return pageLocators.buttonLogOut; }

}

export default SuccessfullLogin;