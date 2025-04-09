import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CustomValidators as cv} from '@shared/utils';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private fb: FormBuilder = inject(FormBuilder);

  protected registerForm: FormGroup = this.fb.group({
    name: ['', [cv.minLength(3), cv.maxLength(255)]],
    email: ['', [cv.required, cv.email]],
    password: ['', [cv.required]],
    confirm_password: ['', [cv.required]],
    remember: [true, []],
  });


  protected onSubmit = () => {

  }
}
