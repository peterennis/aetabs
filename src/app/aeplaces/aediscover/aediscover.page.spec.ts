import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AediscoverPage } from './aediscover.page';

describe('AediscoverPage', () => {
  let component: AediscoverPage;
  let fixture: ComponentFixture<AediscoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AediscoverPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AediscoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
