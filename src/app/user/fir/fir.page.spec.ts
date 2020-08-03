import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirPage } from './fir.page';

describe('FirPage', () => {
  let component: FirPage;
  let fixture: ComponentFixture<FirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
