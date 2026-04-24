import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationsPage } from './reservations.page';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('ReservationsPage', () => {
  let component: ReservationsPage;
  let fixture: ComponentFixture<ReservationsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ReservationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a list of 4 reservations', () => {
    const reservationItems = fixture.debugElement.queryAll(By.css('ion-item'));
    expect(reservationItems.length).toBe(4);
    expect(reservationItems[0].nativeElement.textContent).toContain('Sala de Conferencias A');
    expect(reservationItems[1].nativeElement.textContent).toContain('Puesto de trabajo #12');
    expect(reservationItems[2].nativeElement.textContent).toContain('Consultoría Técnica');
    expect(reservationItems[3].nativeElement.textContent).toContain('Auditorio Principal');
  });
});
