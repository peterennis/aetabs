import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AeofferBookingsPage } from './aeoffer-bookings.page';

describe('AeofferBookingsPage', () => {
  let component: AeofferBookingsPage;
  let fixture: ComponentFixture<AeofferBookingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AeofferBookingsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AeofferBookingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
