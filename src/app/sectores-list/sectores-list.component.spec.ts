import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectoresListComponent } from './sectores-list.component';

describe('SectoresListComponent', () => {
  let component: SectoresListComponent;
  let fixture: ComponentFixture<SectoresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectoresListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
