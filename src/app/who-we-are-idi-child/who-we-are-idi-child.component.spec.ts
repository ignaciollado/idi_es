import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeAreIdiChildComponent } from './who-we-are-idi-child.component';

describe('WhoWeAreIdiChildComponent', () => {
  let component: WhoWeAreIdiChildComponent;
  let fixture: ComponentFixture<WhoWeAreIdiChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoWeAreIdiChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoWeAreIdiChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
