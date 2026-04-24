import { TabsPage } from './tabs.page';
import { provideRouter } from '@angular/router';

describe('TabsPage (Component Testing)', () => {
  beforeEach(() => {
    cy.mount(TabsPage, {
      providers: [provideRouter([])],
    });
  });

  it('should display the correct labels and icons for each tab', () => {
    // Clients Tab verification
    cy.get('ion-tab-button[tab="clients"]').within(() => {
      cy.contains('Clients').should('be.visible');
      cy.get('ion-icon').should('have.attr', 'name', 'people-outline');
    });

    // Reservations Tab verification
    cy.get('ion-tab-button[tab="reservations"]').within(() => {
      cy.contains('Reservations').should('be.visible');
      cy.get('ion-icon').should('have.attr', 'name', 'calendar-outline');
    });

    // Products Tab verification
    cy.get('ion-tab-button[tab="products"]').within(() => {
      cy.contains('Products').should('be.visible');
      cy.get('ion-icon').should('have.attr', 'name', 'pricetags-outline');
    });
  });
});
