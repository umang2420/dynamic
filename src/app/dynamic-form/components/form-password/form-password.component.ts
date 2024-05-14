import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-password',
  templateUrl: './form-password.component.html',
  styleUrls: ['./form-password.component.scss']
})
export class FormPasswordComponent {
  config: any;
  group!: FormGroup;
  
}
