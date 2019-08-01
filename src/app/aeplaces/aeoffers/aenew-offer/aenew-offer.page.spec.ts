import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AenewOfferPage } from './aenew-offer.page';

describe('AenewOfferPage', () => {
  let component: AenewOfferPage;
  let fixture: ComponentFixture<AenewOfferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AenewOfferPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AenewOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
