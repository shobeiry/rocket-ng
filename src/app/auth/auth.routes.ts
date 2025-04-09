import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthComponent} from './auth.component';
import {RegisterComponent} from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {path: '', redirectTo: "login", pathMatch: "full"},
      {path: 'login', component: LoginComponent, title: "Login"},
      {path: 'register', component: RegisterComponent, title: "Register"},
    ]
  },
];
