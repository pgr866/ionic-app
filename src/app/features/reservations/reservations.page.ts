import { Component, inject } from '@angular/core';
import { GenericListComponent } from '../../shared/components/generic-list/generic-list.component';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { add } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reservations',
  templateUrl: 'reservations.page.html',
  styleUrls: ['reservations.page.scss'],
  standalone: true,
  imports: [GenericListComponent, IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon],
})
export class ReservationsPage {
private navCtrl = inject(NavController);

public reservations = [
    {
      id: 1,
      name: 'Sala de Conferencias A',
      description: 'Fecha: 20/10/2023 - 10:00 AM (Confirmada)'
    },
    {
      id: 2,
      name: 'Puesto de trabajo #12',
      description: 'Fecha: 20/10/2023 - Jornada completa (Pendiente)'
    },
    {
      id: 3,
      name: 'Consultoría Técnica',
      description: 'Fecha: 21/10/2023 - 16:30 PM (Confirmada)'
    },
    {
      id: 4,
      name: 'Auditorio Principal',
      description: 'Fecha: 25/10/2023 - Evento Anual (Cancelada)'
    }
  ];

  constructor() {
    addIcons({ add });
  }

  goToCreateReservation() {
    this.navCtrl.navigateForward('/create-reservation');
  }
}
