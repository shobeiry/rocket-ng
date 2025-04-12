import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CustomValidators as cv} from '@shared/utils';

@Component({
  selector: 'app-confirm-password',
  standalone: false,
  templateUrl: './confirm-password.component.html',
  styleUrl: './confirm-password.component.scss'
})
export class ConfirmPasswordComponent {
  private fb: FormBuilder = inject(FormBuilder);

  protected confirmPasswordForm: FormGroup = this.fb.group({
    email: ['', [cv.required, cv.email]],
    password: ['', [cv.required]],
    remember: [true, []],
  });


  protected onSubmit = () => {

  }
}
