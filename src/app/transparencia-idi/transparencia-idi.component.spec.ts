import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparenciaIdiComponent } from './transparencia-idi.component';

describe('TransparenciaIdiComponent', () => {
  let component: TransparenciaIdiComponent;
  let fixture: ComponentFixture<TransparenciaIdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransparenciaIdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransparenciaIdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
