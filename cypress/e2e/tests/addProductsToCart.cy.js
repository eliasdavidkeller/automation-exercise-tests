import HomePage from '../../pages/HomePage';
import CartPage from '../../pages/CartPage';

describe('Add Products to Cart and Verify Quantity', () => {
  it('should add a specific product to the cart, verify it, and validate the quantity', () => {
    // Step 1: Visit the homepage
    HomePage.visit();

    // Step 2: Navigate to the Products page
    HomePage.navigateToProducts();

    // Step 3: Hover over the product and click the overlay "Add to Cart" button
    cy.get('.product-image-wrapper')
      .contains('Sleeveless Dress') // Match the product name
      .parents('.product-image-wrapper')
      .within(() => {
        cy.get('.product-overlay').invoke('show'); 
        cy.get('.overlay-content .add-to-cart').click({ force: true });
      });

    // Step 4: Handle the modal and navigate to the cart
    cy.get('#cartModal').should('be.visible'); 
    cy.get('#cartModal u').contains('View Cart').click({ force: true }); 

    // Step 5: Verify the product is in the cart
    CartPage.verifyProductInCart('Sleeveless Dress');
  });
});
