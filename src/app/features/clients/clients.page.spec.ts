import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientsPage } from './clients.page';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('ClientsPage', () => {
  let component: ClientsPage;
  let fixture: ComponentFixture<ClientsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [ClientsPage],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a list of 4 clients', () => {
    // We look for the ion-item elements rendered by the generic list
    const clientItems = fixture.debugElement.queryAll(By.css('ion-item'));
    expect(clientItems.length).toBe(4);
    expect(clientItems[0].nativeElement.textContent).toContain('Carlos Rodríguez');
    expect(clientItems[1].nativeElement.textContent).toContain('Lucía Fernández');
    expect(clientItems[2].nativeElement.textContent).toContain('Juan Morales');
    expect(clientItems[3].nativeElement.textContent).toContain('Elena Gómez');
  });
});
