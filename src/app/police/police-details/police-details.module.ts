import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliceDetailsPageRoutingModule } from './police-details-routing.module';

import { PoliceDetailsPage } from './police-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliceDetailsPageRoutingModule
  ],
  declarations: [PoliceDetailsPage]
})
export class PoliceDetailsPageModule {}
