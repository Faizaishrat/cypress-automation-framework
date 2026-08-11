import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'
import CheckoutPage from '../pages/CheckoutPage'

describe('Checkout Flow', () => {
  
  beforeEach(() => {
    cy.fixture('loginData').as('loginData')
    cy.fixture('checkoutData').as('checkoutData')
    
    LoginPage.visit()
    LoginPage.login(
      'standard_user',
      'secret_sauce'
    )
  })
  
  it('should complete checkout with valid data', function() {
    DashboardPage.addProductToCart('Sauce Labs Backpack')
    DashboardPage.clickCart()
    
    cy.contains('Checkout').click()
    
    CheckoutPage.fillCheckoutInfo(
      this.checkoutData.user1.firstName,
      this.checkoutData.user1.lastName,
      this.checkoutData.user1.postalCode
    )
    CheckoutPage.clickContinue()
    CheckoutPage.clickFinish()
    
    CheckoutPage.verifyOrderSuccess()
  })
})