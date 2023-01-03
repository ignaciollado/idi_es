import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryServicesIdiComponent } from './history-services-idi.component';

describe('HistoryServicesIdiComponent', () => {
  let component: HistoryServicesIdiComponent;
  let fixture: ComponentFixture<HistoryServicesIdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryServicesIdiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryServicesIdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
