import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AeoffersPage } from './aeoffers.page';

describe('AeoffersPage', () => {
  let component: AeoffersPage;
  let fixture: ComponentFixture<AeoffersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AeoffersPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AeoffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
