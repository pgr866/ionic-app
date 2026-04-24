describe('Logout Functionality (E2E)', () => {

  beforeEach(() => {
    // We start from the products tab where the logout button is located
    cy.visit('/tabs/products');
  });

  it('should redirect the user to the Login page when clicking the logout button', () => {
    // Locate the logout button in the header (using the bold-icon class)
    cy.get('ion-button.bold-icon').click();

    // Verify that the application navigates to the login route
    cy.url().should('include', '/login');

    // Confirm that the login screen is actually displayed
    cy.get('h1').should('contain', 'Iniciar sesión');
    
    // Verify that the credentials input is visible
    cy.get('ion-input[placeholder="admin@ejemplo.com"]').should('be.visible');
  });
});