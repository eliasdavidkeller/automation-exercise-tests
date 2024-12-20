class SearchPage {
    searchProduct(productName) {
      // Type the product name in the search input and click the search button
      cy.get('input#search_product').type(productName);
      cy.get('button#submit_search').click();
    }
  
    verifySearchResults(productName) {
      // Validate the search results contain the product name
      cy.get('.productinfo').should('contain', productName);
    }
  }
  
  export default new SearchPage();
  