import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {InputComponent} from '@shared/components/input/input.component';
import {ButtonComponent} from '@shared/components/button/button.component';
import {TextLinkComponent} from '@shared/components/text-link/text-link.component';
import {CheckboxComponent} from '@shared/components/checkbox/checkbox.component';
import {LabelComponent} from '@shared/components/label/label.component';

const STANDALONE_COMPONENTS: Array<Type<any>> = [
  LabelComponent,
  InputComponent,
  ButtonComponent,
  TextLinkComponent,
  CheckboxComponent,
];
const COMPONENTS: Array<Type<any>> = [];
const DIRECTIVES: Array<Type<any>> = [];
const PIPES: Array<Type<any>> = [];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...STANDALONE_COMPONENTS
  ],
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
    ...STANDALONE_COMPONENTS
  ]
})
export class SharedModule {
}
