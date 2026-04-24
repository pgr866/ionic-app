import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsPage } from './products.page';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('ProductsPage', () => {
  let component: ProductsPage;
  let fixture: ComponentFixture<ProductsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a list of 4 products', () => {
    const productItems = fixture.debugElement.queryAll(By.css('ion-item'));
    expect(productItems.length).toBe(4);
    expect(productItems[0].nativeElement.textContent).toContain('MacBook Pro 14"');
    expect(productItems[1].nativeElement.textContent).toContain('Monitor Dell UltraSharp');
    expect(productItems[2].nativeElement.textContent).toContain('Teclado Logitech MX Keys');
    expect(productItems[3].nativeElement.textContent).toContain('Ratón Ergonómico MX Master 3S');
  });
});
