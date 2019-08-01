import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AebookingsPage } from './aebookings.page';

describe('AebookingsPage', () => {
  let component: AebookingsPage;
  let fixture: ComponentFixture<AebookingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AebookingsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AebookingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
