describe('Reservation Creation Navigation (E2E)', () => {

  it('should navigate to create reservation page from reservations tab', () => {
    // Start from the reservations tab
    cy.visit('/tabs/reservations');

    // Click the Floating Action Button (FAB)
    cy.get('ion-fab-button').click();

    // Verify the URL change
    cy.url().should('include', '/create-reservation');

    // Check if the page title is correct
    cy.get('ion-title').should('contain', 'Nueva Reserva');
  });

  it('should return to reservations tab when clicking back (with history)', () => {
    cy.visit('/tabs/reservations');
    cy.get('ion-fab-button').click();
    
    // Click the back button
    cy.get('ion-back-button').click();

    // Verification
    cy.url().should('include', '/tabs/reservations');
  });

  it('should return to reservations tab via defaultHref (direct access)', () => {
    // Access the page directly without history
    cy.visit('/create-reservation');

    // Click the back button
    cy.get('ion-back-button').click();

    // Verification: Should use defaultHref to go to /tabs/reservations
    cy.url().should('include', '/tabs/reservations');
  });
});