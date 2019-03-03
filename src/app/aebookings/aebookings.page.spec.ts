import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AebookingsPage } from './aebookings.page';

describe('AebookingsPage', () => {
  let component: AebookingsPage;
  let fixture: ComponentFixture<AebookingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AebookingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AebookingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
