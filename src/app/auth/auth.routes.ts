import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthComponent} from './auth.component';
import {RegisterComponent} from './register/register.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {VerifyEmailComponent} from './verify-email/verify-email.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {ConfirmPasswordComponent} from './confirm-password/confirm-password.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {path: '', redirectTo: "login", pathMatch: "full"},
      {path: 'login', component: LoginComponent, title: "Login"},
      {path: 'register', component: RegisterComponent, title: "Register"},
      {path: 'forgot-password', component: ForgotPasswordComponent, title: "Forgot Password"},
      {path: 'verify-email', component: VerifyEmailComponent, title: "Verify Email"},
      {path: 'reset-password', component: ResetPasswordComponent, title: "Reset Password"},
      {path: 'confirm-password', component: ConfirmPasswordComponent, title: "Confirm Password"},
    ]
  },
];
