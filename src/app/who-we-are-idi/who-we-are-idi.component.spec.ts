import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeAreIdiComponent } from './who-we-are-idi.component';

describe('WhoWeAreIdiComponent', () => {
  let component: WhoWeAreIdiComponent;
  let fixture: ComponentFixture<WhoWeAreIdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoWeAreIdiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoWeAreIdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
