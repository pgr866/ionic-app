import { Component, Input, OnInit } from '@angular/core';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Client } from "./../../core/models/client"

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.page.html',
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar]
})
export class ClientDetailPage implements OnInit {
  @Input() id?: string;
  public client?: Client;
  public clients = [
    {
      id: 1,
      name: 'Carlos Rodríguez',
      description: 'Cliente VIP - Sector Inmobiliario'
    },
    {
      id: 2,
      name: 'Lucía Fernández',
      description: 'Suscripción Premium - Consultora IT'
    },
    {
      id: 3,
      name: 'Juan Morales',
      description: 'Cliente Estándar - Distribución Alimentaria'
    },
    {
      id: 4,
      name: 'Elena Gómez',
      description: 'Nueva cuenta - Servicios de Logística'
    }
  ];

  constructor() { }

  ngOnInit() {
    if (this.id) {
      this.client = this.clients.find(c => c.id === parseInt(this.id!));
    }
  }
}
