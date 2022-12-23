import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosIdiComponent } from './proyectos-idi.component';

describe('ProyectosIdiComponent', () => {
  let component: ProyectosIdiComponent;
  let fixture: ComponentFixture<ProyectosIdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosIdiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosIdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
