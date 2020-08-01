import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPolicePageRoutingModule } from './add-police-routing.module';

import { AddPolicePage } from './add-police.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPolicePageRoutingModule
  ],
  declarations: [AddPolicePage]
})
export class AddPolicePageModule {}
