import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-calender',
  templateUrl: './form-calender.component.html',
  styleUrls: ['./form-calender.component.scss']
})
export class FormCalenderComponent {
  constructor() {}
  config:any
  group!: FormGroup;  

}
