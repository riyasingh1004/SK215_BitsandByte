import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NocPage } from './noc.page';

describe('NocPage', () => {
  let component: NocPage;
  let fixture: ComponentFixture<NocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NocPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
