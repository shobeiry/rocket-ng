import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CustomValidators as cv} from '@shared/utils';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private fb: FormBuilder = inject(FormBuilder);

  protected loginForm: FormGroup = this.fb.group({
    email: ['', [cv.required, cv.email]],
    password: ['', [cv.required]],
    remember: [true, []],
  });


  protected onSubmit = () => {

  }
}
