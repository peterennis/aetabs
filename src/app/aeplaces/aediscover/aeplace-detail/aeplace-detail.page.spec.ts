import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AeplaceDetailPage } from './aeplace-detail.page';

describe('AeplaceDetailPage', () => {
  let component: AeplaceDetailPage;
  let fixture: ComponentFixture<AeplaceDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AeplaceDetailPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AeplaceDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
