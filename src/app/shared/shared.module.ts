import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {InputComponent} from '@shared/components/input/input.component';
import {ButtonComponent} from '@shared/components/button/button.component';
import {TextLinkComponent} from '@shared/components/text-link/text-link.component';
import {CheckboxComponent} from '@shared/components/checkbox/checkbox.component';
import {LabelComponent} from '@shared/components/label/label.component';
import {TransDirective, TransPipe} from '@i18n';
import {DropdownComponent} from '@shared/components/dropdown/dropdown.component';

const STANDALONE_COMPONENTS: Array<Type<any>> = [
  LabelComponent,
  InputComponent,
  ButtonComponent,
  TextLinkComponent,
  CheckboxComponent,
  DropdownComponent,
];
const COMPONENTS: Array<Type<any>> = [];
const STANDALONE_DIRECTIVES: Array<Type<any>> = [
  TransDirective
];
const DIRECTIVES: Array<Type<any>> = [];
const STANDALONE_PIPES: Array<Type<any>> = [
  TransPipe
];
const PIPES: Array<Type<any>> = [];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...STANDALONE_COMPONENTS,
    ...STANDALONE_PIPES,
    ...STANDALONE_DIRECTIVES
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
    ...STANDALONE_COMPONENTS,
    ...STANDALONE_PIPES,
    ...STANDALONE_DIRECTIVES
  ]
})
export class SharedModule {
}
