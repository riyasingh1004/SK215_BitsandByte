import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirPageRoutingModule } from './fir-routing.module';

import { FirPage } from './fir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirPageRoutingModule
  ],
  declarations: [FirPage]
})
export class FirPageModule {}
