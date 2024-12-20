Cypress.Commands.add('addProductToCart', (productName) => {
    cy.get(`.productinfo:contains("${productName}")`)
      .parent()
      .find('button:contains("Add to cart")')
      .click();
    cy.get('.modal-footer button:contains("Continue Shopping")').click();
  });
  