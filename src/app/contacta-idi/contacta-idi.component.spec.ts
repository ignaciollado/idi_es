import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactaIdiComponent } from './contacta-idi.component';

describe('ContactaIdiComponent', () => {
  let component: ContactaIdiComponent;
  let fixture: ComponentFixture<ContactaIdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactaIdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactaIdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
