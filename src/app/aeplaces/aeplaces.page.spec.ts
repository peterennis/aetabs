import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeplacesPage } from './aeplaces.page';

describe('AeplacesPage', () => {
  let component: AeplacesPage;
  let fixture: ComponentFixture<AeplacesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeplacesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeplacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
