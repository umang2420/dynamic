import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCalenderComponent } from './form-calender.component';

describe('FormCalenderComponent', () => {
  let component: FormCalenderComponent;
  let fixture: ComponentFixture<FormCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCalenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
