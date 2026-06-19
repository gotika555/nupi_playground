class LoginPage {
  // 1. We define "getters" to hold our selectors in one central place
  get usernameInput() { return cy.get('[data-test="username"]'); }
  get passwordInput() { return cy.get('[data-test="password"]'); }
  get loginButton() { return cy.get('[data-test="login-button"]'); }
  get errorMessage() { return cy.get('[data-test="error"]'); }

  // 2. We create helper functions to perform actions
  submitLogin(username, password) {
    this.usernameInput.type(username);
    this.passwordInput.type(password);
    this.loginButton.click();
  }
}

// Export it so our test files can read it
export default new LoginPage();