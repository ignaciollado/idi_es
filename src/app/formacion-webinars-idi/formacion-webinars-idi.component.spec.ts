import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionWebinarsIdiComponent } from './formacion-webinars-idi.component';

describe('FormacionWebinarsIdiComponent', () => {
  let component: FormacionWebinarsIdiComponent;
  let fixture: ComponentFixture<FormacionWebinarsIdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormacionWebinarsIdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormacionWebinarsIdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
