import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyPage } from './family.page';

describe('FamilyPage', () => {
  let component: FamilyPage;
  let fixture: ComponentFixture<FamilyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
