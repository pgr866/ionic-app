import { ReservationsPage } from './reservations.page';
import { provideRouter } from '@angular/router';

describe('ReservationsPage (Component Testing)', () => {
  beforeEach(() => {
    cy.mount(ReservationsPage, {
      providers: [provideRouter([])]
    });
  });

  it('should render the list of reservations correctly', () => {
    cy.get('ion-item').should('have.length', 4);
    cy.get('ion-item').eq(0).should('contain', 'Sala de Conferencias A');
    cy.get('ion-item').eq(1).should('contain', 'Puesto de trabajo #12');
    cy.get('ion-item').eq(2).should('contain', 'Consultoría Técnica');
    cy.get('ion-item').eq(3).should('contain', 'Auditorio Principal');
  });
});