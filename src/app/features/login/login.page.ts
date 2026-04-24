import { Component, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonItem, IonLabel, IonInput, IonButton, IonIcon 
} from '@ionic/angular/standalone';
import { personOutline, lockClosedOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, 
    IonItem, IonLabel, IonInput, IonButton, IonIcon
  ]
})
export class LoginPage {
  private navCtrl = inject(NavController);


  constructor() {
    addIcons({ personOutline, lockClosedOutline });
  }

  onLogin() {
    this.navCtrl.navigateRoot('/tabs/reservations');
  }
}
