class CartPage {
  verifyProductInCart(productName) {
      cy.get('.cart_description').should('contain', productName);
  }

  verifyProductQuantity(productName, expectedQuantity) {
      cy.get('#cart_info_table tbody tr') // Target the rows in the cart table
          .contains(productName) // Match the product by name
          .parents('tr') // Get the parent row of the matched product
          .find('.cart_quantity button.disabled') // Locate the quantity button
          .should('have.text', expectedQuantity); // Verify the quantity matches
  }
}

export default new CartPage();
