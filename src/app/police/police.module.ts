import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicePageRoutingModule } from './police-routing.module';

import { PolicePage } from './police.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicePageRoutingModule
  ],
  declarations: [PolicePage]
})
export class PolicePageModule {}
