import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreIdiComponent } from './explore-idi.component';

describe('ExploreIdiComponent', () => {
  let component: ExploreIdiComponent;
  let fixture: ComponentFixture<ExploreIdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreIdiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreIdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
