import {NgModule} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './auth.routes';
import {LoginComponent} from './login/login.component';
import {AuthComponent} from './auth.component';
import {SharedModule} from '@shared';
import {RegisterComponent} from './register/register.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ChevronDown, Gem, LucideAngularModule, MonitorCog, Moon, Sun} from 'lucide-angular';
import {VerifyEmailComponent} from './verify-email/verify-email.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {ConfirmPasswordComponent} from './confirm-password/confirm-password.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ResetPasswordComponent,
    ConfirmPasswordComponent
  ],
  imports: [
    SharedModule,
    LucideAngularModule.pick({Gem, ChevronDown, Moon, Sun, MonitorCog})
  ],
  providers: [
    provideRouter(routes)
  ]
})
export class AuthModule {
}
