import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonItem, IonLabel, IonList } from '@ionic/angular/standalone';

export interface GenericItem {
  id: number | string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  standalone: true,
  imports: [IonItem, IonLabel, IonList, RouterLink],
})
export class GenericListComponent {
  @Input() items: GenericItem[] = [];
  @Input() basePath: string = '';

  constructor() { } 
}