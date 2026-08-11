class DashboardPage {
  productTitle = '.title'
  cartButton = '[data-test="shopping-cart-link"]'
  logoutButton = '#logout_sidebar_link'
  menuButton = '#react-burger-menu-btn'
  
  isDashboardDisplayed() {
    cy.get(this.productTitle).should('contain', 'Products')
  }
  
  clickCart() {
    cy.get(this.cartButton).click()
  }
  
  logout() {
    cy.get(this.menuButton).click()
    cy.get(this.logoutButton).click()
  }
  
  addProductToCart(productName) {
    cy.contains(productName)
      .parent()
      .parent()
      .find('[data-test*="add-to-cart"]')
      .click()
  }
}

export default new DashboardPage()