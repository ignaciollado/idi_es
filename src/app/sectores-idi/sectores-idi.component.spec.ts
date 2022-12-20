import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectoresIdiComponent } from './sectores-idi.component';

describe('SectoresIdiComponent', () => {
  let component: SectoresIdiComponent;
  let fixture: ComponentFixture<SectoresIdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectoresIdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectoresIdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
