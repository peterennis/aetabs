import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbigramPage } from './ambigram.page';

describe('AmbigramPage', () => {
  let component: AmbigramPage;
  let fixture: ComponentFixture<AmbigramPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbigramPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbigramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
