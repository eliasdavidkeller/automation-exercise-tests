import HomePage from '../../pages/HomePage';
import SearchPage from '../../pages/SearchPage';

describe('Search Product', () => {
  it('should search for a product and display results', () => {
    // Step 1: Visit the homepage
    HomePage.visit();

    // Step 2: Navigate to the Products page
    HomePage.navigateToProducts();

    // Step 3: Search for a product
    const productName = 'Dress';
    SearchPage.searchProduct(productName);

    // Step 4: Verify the search results
    SearchPage.verifySearchResults(productName);
  });
});
