import { Component } from '@angular/core';
import { FormGroup,FormBuilder,} from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent {
  config: any;
  group!: FormGroup;
}
