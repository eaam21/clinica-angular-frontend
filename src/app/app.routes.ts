import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Inicio } from './inicio/inicio';
import Logout from './logout/logout';

export const routes: Routes = [
      { path: '', component: Login },
      { path: 'inicio', component: Inicio },
      { path: 'salir', component: Logout },
];