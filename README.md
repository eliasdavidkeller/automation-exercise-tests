# Automated Tests for E-Commerce Website

This repository contains automated end-to-end (E2E) tests for an e-commerce website. The tests validate 'critical' functionalities, including adding products to the cart, verifying the product in the cart, validating quantities, and ensuring proper cart behavior. These tests are written in Cypress and follow a modular approach with Page Object Model (POM).

---

## **Table of Contents**
1. [Project Structure](#project-structure)
2. [Prerequisites](#prerequisites)
3. [Setup](#setup)
4. [How to Run the Tests](#how-to-run-the-tests)
5. [Test Cases Overview](#test-cases-overview)
6. [Integrations](#integrations)

---

## **Project Structure**

```
project-root/
├── cypress/
│   ├── e2e/
│   │   ├── tests/
│   │   │   ├── addProductToCart.cy.js
│   │   │   ├── verifyProductQuantity.cy.js
│   │   └── pages/
│   │       ├── HomePage.js
│   │       ├── CartPage.js
│   ├── support/
│   └── fixtures/
├── node_modules/
├── cypress.config.js
├── package.json
└── README.md
```

### Key Files and Directories:
- **`e2e/tests`**: Contains the test scripts.
- **`e2e/pages`**: Implements Page Object Model for modular and reusable components.
- **`support`**: Houses utility functions and configurations.
- **`fixtures`**: Contains test data.
- **`cypress.config.js`**: Cypress configuration file.

---

## **Prerequisites**

Ensure the following tools are installed on your system:

1. **Node.js**: Version 16 or above
2. **npm**: Comes with Node.js
3. **Cypress**: Installed via `npm`

---

## **Setup**

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo.git
    cd project-root
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Open Cypress Test Runner:
    ```bash
    npx cypress open
    ```

---

## **How to Run the Tests**

### Running Tests Locally

- **Run all tests:**
    ```bash
    npx cypress run
    ```

- **Run specific test files:**
    ```bash
    npx cypress run --spec cypress/e2e/tests/addProductToCart.cy.js
    ```

### Running Tests in Interactive Mode

To view the tests running in real-time:
```bash
npx cypress open
```
Select a test file from the Cypress Test Runner.

---

## **Test Cases Overview**

### 1. **Add Products to Cart**
**File:** `addProductToCart.cy.js`

**Description:**
- Verifies the ability to add a specific product to the cart.
- Ensures the product appears in the cart.
- Validates the cart modal behavior.

**Steps:**
1. Navigate to the product page.
2. Hover over the product.
3. Add the product using the overlay.
4. Verify the product in the cart.

### 2. **Verify Product Quantity**
**File:** `verifyProductQuantity.cy.js`

**Description:**
- Ensures the quantity of the product in the cart matches the expected value.

**Steps:**
1. Add a product to the cart.
2. Navigate to the cart.
3. Validate the quantity displayed in the cart.

### 3. **Add Products Validation**
**File:** `addProductValidation.cy.js`

**Description:**
- Ensures only products with the "Add to Cart" functionality can be added to the cart.
- Verifies the unavailability of the "Add to Cart" button for restricted products.