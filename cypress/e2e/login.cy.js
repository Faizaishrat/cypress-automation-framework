import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'

describe('Login Feature', () => {
  
  beforeEach(() => {
    cy.fixture('loginData').as('testData')
    LoginPage.visit()
  })
  
  it('should login with valid credentials', function() {
    LoginPage.login(
      this.testData.validUser.username,
      this.testData.validUser.password
    )
    DashboardPage.isDashboardDisplayed()
    cy.url().should('include', '/inventory.html')
  })
  
  it('should show error with invalid credentials', function() {
    LoginPage.login(
      this.testData.invalidUser.username,
      this.testData.invalidUser.password
    )
    LoginPage.getErrorMessage()
      .should('contain', 'Username and password do not match')
  })
  
  it('should show error for locked user', function() {
    LoginPage.login(
      this.testData.lockedUser.username,
      this.testData.lockedUser.password
    )
    LoginPage.getErrorMessage()
      .should('contain', 'locked')
  })
})