import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-radio',
  templateUrl: './form-radio.component.html',
  styleUrls: ['./form-radio.component.scss']
})
export class FormRadioComponent {
  config: any;
  group!: FormGroup;

}
