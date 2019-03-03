import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeeditOfferPage } from './aeedit-offer.page';

describe('AeeditOfferPage', () => {
  let component: AeeditOfferPage;
  let fixture: ComponentFixture<AeeditOfferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeeditOfferPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeeditOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
