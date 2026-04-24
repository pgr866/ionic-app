describe('Back Button Navigation (E2E)', () => {

  it('should go back to clients list after navigating from tabs', () => {
    // Start from the clients tab
    cy.visit('/tabs/clients');
    
    // Go to a specific client detail
    cy.get('ion-item').first().click();
    cy.url().should('include', '/client-detail/1');

    // Click the back button
    cy.get('ion-back-button').click();

    // Verification: Should be back in the clients list
    cy.url().should('include', '/tabs/clients');
  });

  it('should redirect to clients list using defaultHref when accessed directly', () => {
    // Access the detail page directly (no navigation history)
    cy.visit('/client-detail/2');
    
    // Click the back button
    cy.get('ion-back-button').click();

    // Verification: defaultHref should trigger and take us to /tabs/clients
    cy.url().should('include', '/tabs/clients');
  });
});