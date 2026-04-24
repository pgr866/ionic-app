import { ClientsPage } from './clients.page';
import { provideRouter } from '@angular/router';

describe('ClientsPage (Component Testing)', () => {
  beforeEach(() => {
    cy.mount(ClientsPage, {
      providers: [provideRouter([])],
    });
  });

  it('should render the list of clients correctly', () => {
    // Check that we have 4 items in the list
    cy.get('ion-item').should('have.length', 4);

    // Verify specific content
    cy.get('ion-item').eq(0).should('contain', 'Carlos Rodríguez');
    cy.get('ion-item').eq(1).should('contain', 'Lucía Fernández');
    cy.get('ion-item').eq(2).should('contain', 'Juan Morales');
    cy.get('ion-item').eq(3).should('contain', 'Elena Gómez');
  });
});
