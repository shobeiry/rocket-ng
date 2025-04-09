import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CustomValidators as cv} from '@shared/utils';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  private fb: FormBuilder = inject(FormBuilder);

  protected forgotPasswordForm: FormGroup = this.fb.group({
    email: ['', [cv.required, cv.email]],
  });


  protected onSubmit = () => {

  }
}
