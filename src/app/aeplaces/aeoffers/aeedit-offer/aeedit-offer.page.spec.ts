import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AeeditOfferPage } from './aeedit-offer.page';

describe('AeeditOfferPage', () => {
  let component: AeeditOfferPage;
  let fixture: ComponentFixture<AeeditOfferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AeeditOfferPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AeeditOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
