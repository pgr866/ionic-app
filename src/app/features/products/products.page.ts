import { Component, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GenericListComponent } from '../../shared/components/generic-list/generic-list.component';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonButton, IonButtons, IonIcon 
} from '@ionic/angular/standalone';
import { logOutOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-products',
  templateUrl: 'products.page.html',
  styleUrls: ['products.page.scss'],
  standalone: true,
imports: [
    GenericListComponent, IonContent, IonHeader, IonTitle, 
    IonToolbar, IonButton, IonButtons, IonIcon
  ],
})
export class ProductsPage {
  private navCtrl = inject(NavController);

  public products = [
    {
      id: 1,
      name: 'MacBook Pro 14"',
      description: 'M3 Pro, 18GB RAM, 512GB SSD '
    },
    {
      id: 2,
      name: 'Monitor Dell UltraSharp',
      description: '27" 4K USB-C Hub Monitor'
    },
    {
      id: 3,
      name: 'Teclado Logitech MX Keys',
      description: 'Inalámbrico, Retroiluminado, multidispositivo'
    },
    {
      id: 4,
      name: 'Ratón Ergonómico MX Master 3S',
      description: 'Sensor 8K DPI, Clics silenciosos'
    }
  ];

  constructor() {
    addIcons({ logOutOutline });
  }

  logout() {
    localStorage.removeItem('user_token');
    this.navCtrl.navigateRoot('/login');;
  }
}
