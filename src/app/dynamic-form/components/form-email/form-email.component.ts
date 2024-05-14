import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-email',
  templateUrl: './form-email.component.html',
  styleUrls: ['./form-email.component.scss']
})
export class FormEmailComponent {
  config: any;
  group!: FormGroup;
}
