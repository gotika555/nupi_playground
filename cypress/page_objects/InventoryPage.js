
class InventoryPage {
  // Getters for selectors
  get backpackAddToCartButton() { return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'); }
  get shoppingCartBadge() { return cy.get('[data-test="shopping-cart-badge"]'); }

  // Helper function
  addBackpackToCart() {
    this.backpackAddToCartButton.click();
  }
}

export default new InventoryPage();