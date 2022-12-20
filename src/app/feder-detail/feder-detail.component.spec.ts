import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FederDetailComponent } from './feder-detail.component';

describe('FederDetailComponent', () => {
  let component: FederDetailComponent;
  let fixture: ComponentFixture<FederDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FederDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FederDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
