import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AeplacesPage } from './aeplaces.page';

describe('AeplacesPage', () => {
  let component: AeplacesPage;
  let fixture: ComponentFixture<AeplacesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AeplacesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AeplacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
