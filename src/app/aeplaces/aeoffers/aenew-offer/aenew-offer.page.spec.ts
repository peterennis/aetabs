import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AenewOfferPage } from './aenew-offer.page';

describe('AenewOfferPage', () => {
  let component: AenewOfferPage;
  let fixture: ComponentFixture<AenewOfferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AenewOfferPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AenewOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
