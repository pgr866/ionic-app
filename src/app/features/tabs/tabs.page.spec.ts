import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TabsPage } from './tabs.page';
import { By } from '@angular/platform-browser';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsPage],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct labels and icons for each tab', () => {
    const tabButtons = fixture.debugElement.queryAll(By.css('ion-tab-button'));

    const expectedTabs = [
      { label: 'Clients', icon: 'people-outline' },
      { label: 'Reservations', icon: 'calendar-outline' },
      { label: 'Products', icon: 'pricetags-outline' },
    ];

    expect(tabButtons.length).toBe(3);

    expectedTabs.forEach((tab, index) => {
      const button = tabButtons[index];

      // Validate the button text
      expect(button.nativeElement.textContent).toContain(tab.label);

      // Validate the icon inside this specific button
      const icon = button.query(By.css('ion-icon'));
      expect(icon).toBeTruthy(); // Verify that the icon exists
      expect(icon.attributes['name']).toBe(tab.icon);
    });
  });
});
