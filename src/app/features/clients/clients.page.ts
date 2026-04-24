import { Component } from '@angular/core';
import { GenericListComponent } from '../../shared/components/generic-list/generic-list.component';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-clients',
  templateUrl: 'clients.page.html',
  styleUrls: ['clients.page.scss'],
  standalone: true,
  imports: [GenericListComponent, IonContent, IonHeader, IonTitle, IonToolbar],
})
export class ClientsPage {
  public clients = [
    {
      id: 1,
      name: 'Carlos Rodríguez',
      description: 'Cliente VIP - Sector Inmobiliario',
    },
    {
      id: 2,
      name: 'Lucía Fernández',
      description: 'Suscripción Premium - Consultora IT',
    },
    {
      id: 3,
      name: 'Juan Morales',
      description: 'Cliente Estándar - Distribución Alimentaria',
    },
    {
      id: 4,
      name: 'Elena Gómez',
      description: 'Nueva cuenta - Servicios de Logística',
    },
  ];

  constructor() {}
}
