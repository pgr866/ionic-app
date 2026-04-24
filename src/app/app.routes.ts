import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/tabs/tabs.routes').then(m => m.routes),
  },
  {
    path: 'client-detail/:id',
    loadComponent: () => import('./features/client-detail/client-detail.page').then(m => m.ClientDetailPage)
  },
  {
    path: 'create-reservation',
    loadComponent: () => import('./features/create-reservation/create-reservation.page').then(m => m.CreateReservationPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.page').then( m => m.LoginPage)
  },
];
