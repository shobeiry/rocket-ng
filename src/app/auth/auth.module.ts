import {NgModule} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './auth.routes';
import {LoginComponent} from './login/login.component';
import {AuthComponent} from './auth.component';
import {SharedModule} from '@shared';
import {RegisterComponent} from './register/register.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ChevronDown, Gem, LucideAngularModule, MonitorCog, Moon, Sun} from 'lucide-angular';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
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
