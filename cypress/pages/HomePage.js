class HomePage {
    visit() {
      cy.visit('/');
    }
  
    navigateToProducts() {
      // Click on the "Products" link in the navigation menu
      cy.get('ul.nav.navbar-nav li a[href="/products"]').click();
    }
  
    navigateToCart() {
      // Click on the "Cart" link in the navigation menu
      cy.get('a[href="/view_cart"]').click();
    }
  }
  
  export default new HomePage();
  