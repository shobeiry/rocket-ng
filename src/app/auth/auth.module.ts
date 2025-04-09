import {NgModule} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './auth.routes';
import {LoginComponent} from './login/login.component';
import {AuthComponent} from './auth.component';
import {LabelComponent} from '@shared/components/label/label.component';
import {SharedModule} from '@shared';
import {InputComponent} from '@shared/components/input/input.component';
import {ButtonComponent} from '@shared/components/button/button.component';
import {TextLinkComponent} from '@shared/components/text-link/text-link.component';
import {CheckboxComponent} from '@shared/components/checkbox/checkbox.component';
import {RegisterComponent} from './register/register.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    LabelComponent,
    SharedModule,
    InputComponent,
    ButtonComponent,
    TextLinkComponent,
    CheckboxComponent
  ],
  providers: [
    provideRouter(routes)
  ]
})
export class AuthModule {
}
