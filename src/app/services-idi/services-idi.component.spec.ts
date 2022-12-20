import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesIdiComponent } from './services-idi.component';

describe('ServicesIdiComponent', () => {
  let component: ServicesIdiComponent;
  let fixture: ComponentFixture<ServicesIdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesIdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesIdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
