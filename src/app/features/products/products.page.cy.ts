import { ProductsPage } from './products.page';
import { provideRouter } from '@angular/router';

describe('ProductsPage (Component Testing)', () => {
  beforeEach(() => {
    cy.mount(ProductsPage, {
      providers: [provideRouter([])]
    });
  });

  it('should render the list of products correctly', () => {
    cy.get('ion-item').should('have.length', 4);
    cy.get('ion-item').eq(0).should('contain', 'MacBook Pro 14"');
    cy.get('ion-item').eq(1).should('contain', 'Monitor Dell UltraSharp');
    cy.get('ion-item').eq(2).should('contain', 'Teclado Logitech MX Keys');
    cy.get('ion-item').eq(3).should('contain', 'Ratón Ergonómico MX Master 3S');
  });
});