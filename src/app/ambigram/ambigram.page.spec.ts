import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmbigramPage } from './ambigram.page';

describe('AmbigramPage', () => {
  let component: AmbigramPage;
  let fixture: ComponentFixture<AmbigramPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AmbigramPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmbigramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
