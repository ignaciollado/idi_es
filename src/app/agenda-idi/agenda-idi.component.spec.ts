import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaIdiComponent } from './agenda-idi.component';

describe('AgendaIdiComponent', () => {
  let component: AgendaIdiComponent;
  let fixture: ComponentFixture<AgendaIdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaIdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaIdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
