import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-verify-email',
  standalone: false,
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.scss'
})
export class VerifyEmailComponent {
  private fb: FormBuilder = inject(FormBuilder);

  protected verifyEmailForm: FormGroup = this.fb.group({});


  protected onSubmit = () => {

  }
}
