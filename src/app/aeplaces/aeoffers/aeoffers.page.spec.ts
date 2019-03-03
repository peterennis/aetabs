import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeoffersPage } from './aeoffers.page';

describe('AeoffersPage', () => {
  let component: AeoffersPage;
  let fixture: ComponentFixture<AeoffersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeoffersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeoffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
