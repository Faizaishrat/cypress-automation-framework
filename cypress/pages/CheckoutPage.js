class CheckoutPage {
  firstNameField = '[data-test="firstName"]'
  lastNameField = '[data-test="lastName"]'
  postalCodeField = '[data-test="postalCode"]'
  continueButton = '[data-test="continue"]'
  finishButton = '[data-test="finish"]'
  successMessage = '.complete-header'
  
  fillCheckoutInfo(firstName, lastName, postalCode) {
    cy.get(this.firstNameField).type(firstName)
    cy.get(this.lastNameField).type(lastName)
    cy.get(this.postalCodeField).type(postalCode)
  }
  
  clickContinue() {
    cy.get(this.continueButton).click()
  }
  
  clickFinish() {
    cy.get(this.finishButton).click()
  }
  
  verifyOrderSuccess() {
    cy.get(this.successMessage).should('contain', 'Thank you')
  }
}

export default new CheckoutPage()