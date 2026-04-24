describe('Client Detail Navigation (E2E)', () => {
  
  beforeEach(() => {
    // Navigate to the clients tab before each test
    cy.visit('/tabs/clients');
  });

  it('should navigate to the detail page when a client is clicked', () => {
    // Click on the first client item (Carlos Rodríguez - ID: 1)
    cy.get('ion-item').first().click();

    // Check if the URL has changed to the correct path
    cy.url().should('include', '/client-detail/1');

    // Verify that the correct ID is displayed in the view
    cy.get('h3').should('contain', 'Detalles del cliente 1');
    
    // Verify the client name is also rendered to ensure data loading
    cy.get('h1').should('contain', 'Carlos Rodríguez');
  });

  it('should display the correct ID for a different client', () => {
    // Click on the third client (Juan Morales - ID: 3)
    // index starts at 0, so eq(2) is the third item
    cy.get('ion-item').eq(2).click();

    // Assertions
    cy.url().should('include', '/client-detail/3');
    cy.get('h3').should('contain', 'Detalles del cliente 3');
    cy.get('h1').should('contain', 'Juan Morales');
  });
});