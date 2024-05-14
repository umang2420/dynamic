import { Component, ViewChild} from '@angular/core';
import { Validators} from '@angular/forms';
import { passwordvalidaator } from './dynamic-form/validators/passwordvalidaators';
import { DynamicFormComponent } from './dynamic-form/containers/dynamic-form/dynamic-form.component';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
  <ng-container>
    <div class="app">
      <app-dynamic-form
        [config]="config"
        (submitted)="formSubmitted($event)">
      </app-dynamic-form>
    </div>
  </ng-container>
</div>
`,
})
export class AppComponent {
  @ViewChild(DynamicFormComponent) FormValue!: DynamicFormComponent;
  config = [
    {
      type: 'input',
      label: 'Name',
      name: 'name', 
      placeholder: 'Enter your name',
      validation: [Validators.required,Validators.pattern(/^[a-z][a-z]*$/)]
    },
    
    { 
      type: 'password',
      label: 'Password',
      name: 'password',
      placeholder: 'Enter password',
      validation: [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/),passwordvalidaator()]
    },
    {
      type: 'password',
      label: 'Confirm-Password',
      name: 'confirmPassword',
      placeholder: 'Confirm password',
      validation: [Validators.required,passwordvalidaator()]
    },
    {
      type: 'email',
      label: 'Email',
      name: 'Email',
      placeholder: 'Enter your Email',
      validation: [Validators.required,Validators.email]
    },
    {
      type: 'calender',
      label: 'From',
      name: 'StartDate',
      placeholder: 'select start date',
      max:true
    },
    {
      type: 'calender',
      label: 'To',
      name: 'EndDate',
      placeholder: 'select end date',
      min:true
      
    },
    {
      type: 'radio',
      label: 'Radio',
      name: 'radioOption',
      options: ['Accounting','Marketing','Production','Research'],
      placeholder: 'Select option',
      validation: [Validators.required]
    },
  
    {
      type: 'select',
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Tea', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: '',
      type: 'button',
    }
    
  ];
  formSubmitted(value: any) {
    console.log(value);
    this.FormValue.form.reset()
  }
}

