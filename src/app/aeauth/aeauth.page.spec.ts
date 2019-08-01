import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AeauthPage } from './aeauth.page';

describe('AeauthPage', () => {
  let component: AeauthPage;
  let fixture: ComponentFixture<AeauthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AeauthPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AeauthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
