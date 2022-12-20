import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceIdiDetailComponent } from './service-idi-detail.component';

describe('ServiceIdiDetailComponent', () => {
  let component: ServiceIdiDetailComponent;
  let fixture: ComponentFixture<ServiceIdiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceIdiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceIdiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
