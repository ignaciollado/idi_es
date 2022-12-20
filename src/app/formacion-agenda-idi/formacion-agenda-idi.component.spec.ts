import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionAgendaIdiComponent } from './formacion-agenda-idi.component';

describe('FormacionAgendaIdiComponent', () => {
  let component: FormacionAgendaIdiComponent;
  let fixture: ComponentFixture<FormacionAgendaIdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormacionAgendaIdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormacionAgendaIdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
