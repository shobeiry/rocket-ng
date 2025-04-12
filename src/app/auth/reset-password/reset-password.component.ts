import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CustomValidators as cv} from '@shared/utils';

@Component({
  selector: 'app-reset-password',
  standalone: false,
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  private fb: FormBuilder = inject(FormBuilder);

  protected resetPasswordForm: FormGroup = this.fb.group({
    email: ['', [cv.email]],
    password: ['', [cv.required]],
    confirm_password: ['', [cv.required]]
  });


  protected onSubmit = () => {

  }
}
