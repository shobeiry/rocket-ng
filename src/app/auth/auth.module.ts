import {NgModule} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './auth.routes';
import {LoginComponent} from './login/login.component';
import {AuthComponent} from './auth.component';
import {SharedModule} from '@shared';
import {RegisterComponent} from './register/register.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {Gem, LucideAngularModule} from 'lucide-angular';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    SharedModule,
    LucideAngularModule.pick({Gem})
  ],
  providers: [
    provideRouter(routes)
  ]
})
export class AuthModule {
}
