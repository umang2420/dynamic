import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { FormEmailComponent } from './components/form-email/form-email.component';
import { FormCalenderComponent } from './components/form-calender/form-calender.component';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormPasswordComponent } from './components/form-password/form-password.component';
import { PasswordModule } from 'primeng/password';
import { FormRadioComponent } from './components/form-radio/form-radio.component';
@NgModule({
  declarations: [DynamicFormComponent, FormInputComponent, FormButtonComponent, FormSelectComponent, DynamicFieldDirective, FormEmailComponent, FormCalenderComponent, FormPasswordComponent, FormRadioComponent],
  exports: [DynamicFormComponent],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormEmailComponent,
    FormCalenderComponent,
    FormPasswordComponent,
    FormRadioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    PasswordModule,
    RadioButtonModule
  ]
})
export class DynamicFormModule { }
