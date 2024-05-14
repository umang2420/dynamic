import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import{FormButtonComponent}from'../form-button/form-button.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormSelectComponent } from '../form-select/form-select.component';
import{FormEmailComponent}from'../form-email/form-email.component';
import{FormCalenderComponent}from'../form-calender/form-calender.component';
import{FormPasswordComponent}from'../form-password/form-password.component';
import{FormRadioComponent}from'../form-radio/form-radio.component';
const components: any = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent,
  email:FormEmailComponent,
  calender:FormCalenderComponent,
  password:FormPasswordComponent,
  radio:FormRadioComponent
};

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  component:any
  @Input() config: any= [];
  @Input()
  group!: FormGroup;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}  
  ngOnInit() {
    const component= components[this.config.type];
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}