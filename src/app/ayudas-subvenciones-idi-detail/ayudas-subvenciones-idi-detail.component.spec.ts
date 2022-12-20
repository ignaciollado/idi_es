import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudasSubvencionesIdiDetailComponent } from './ayudas-subvenciones-idi-detail.component';

describe('AyudasSubvencionesIdiDetailComponent', () => {
  let component: AyudasSubvencionesIdiDetailComponent;
  let fixture: ComponentFixture<AyudasSubvencionesIdiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyudasSubvencionesIdiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudasSubvencionesIdiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
