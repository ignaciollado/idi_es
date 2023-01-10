import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosIdiChildComponent } from './proyectos-idi-child.component';

describe('ProyectosIdiChildComponent', () => {
  let component: ProyectosIdiChildComponent;
  let fixture: ComponentFixture<ProyectosIdiChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosIdiChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosIdiChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
