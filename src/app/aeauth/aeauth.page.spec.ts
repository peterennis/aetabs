import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeauthPage } from './aeauth.page';

describe('AeauthPage', () => {
  let component: AeauthPage;
  let fixture: ComponentFixture<AeauthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeauthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeauthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
