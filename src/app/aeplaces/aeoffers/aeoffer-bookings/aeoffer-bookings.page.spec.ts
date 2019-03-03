import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeofferBookingsPage } from './aeoffer-bookings.page';

describe('AeofferBookingsPage', () => {
  let component: AeofferBookingsPage;
  let fixture: ComponentFixture<AeofferBookingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeofferBookingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeofferBookingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
