import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixIdiHomeChildComponent } from './matrix-idi-home-child.component';

describe('MatrixIdiHomeChildComponent', () => {
  let component: MatrixIdiHomeChildComponent;
  let fixture: ComponentFixture<MatrixIdiHomeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrixIdiHomeChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrixIdiHomeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
