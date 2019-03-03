import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeplaceBookingsPage } from './aeplace-bookings.page';

describe('AeplaceBookingsPage', () => {
  let component: AeplaceBookingsPage;
  let fixture: ComponentFixture<AeplaceBookingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeplaceBookingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeplaceBookingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
