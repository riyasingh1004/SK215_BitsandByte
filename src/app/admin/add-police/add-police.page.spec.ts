import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPolicePage } from './add-police.page';

describe('AddPolicePage', () => {
  let component: AddPolicePage;
  let fixture: ComponentFixture<AddPolicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPolicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPolicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
