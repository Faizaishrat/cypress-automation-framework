class LoginPage {
  usernameField = '[data-test="username"]'
  passwordField = '[data-test="password"]'
  loginButton = '[data-test="login-button"]'
  errorMessage = '[data-test="error"]'
  
  visit() {
    cy.visit('/')
  }
  
  enterUsername(username) {
    cy.get(this.usernameField).clear().type(username)
  }
  
  enterPassword(password) {
    cy.get(this.passwordField).clear().type(password)
  }
  
  clickLogin() {
    cy.get(this.loginButton).click()
  }
  
  login(username, password) {
    this.enterUsername(username)
    this.enterPassword(password)
    this.clickLogin()
  }
  
  getErrorMessage() {
    return cy.get(this.errorMessage)
  }
}

export default new LoginPage()