import InventoryPage from '../page_objects/InventoryPage';
import LoginPage from '../page_objects/LoginPage';

describe('SauceDemo Authentication Suite', () => {

  // This runs BEFORE each individual test block inside this file
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('Scenario 1: Should block an invalid user from logging in', () => {
    // Type incorrect credentials
    LoginPage.submitLogin('wrong_user','secret_sauce');

    // Assert that an error message container appears and contains specific text
    LoginPage.errorMessage
       .should('be.visible')
       .and('contain', 'Username and password do not match');
   });

  it('Scenario 2: Should allow a valid user to reach the inventory page', () => {
    // Type correct credentials
 // 1. Log in using the Login Page Object
     LoginPage.submitLogin('standard_user', 'secret_sauce');
     cy.url().should('include', '/inventory.html');

     // 2. Interact with the inventory using YOUR new Page Object
     InventoryPage.addBackpackToCart();

     // 3. Verify the badge count using your getter
     InventoryPage.shoppingCartBadge
       .should('be.visible')
       .and('have.text', '1');
   });
});
