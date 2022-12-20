import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactIdiHomeComponent } from './contact-idi-home.component';

describe('ContactIdiHomeComponent', () => {
  let component: ContactIdiHomeComponent;
  let fixture: ComponentFixture<ContactIdiHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactIdiHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactIdiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
