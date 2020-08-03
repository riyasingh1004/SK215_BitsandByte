import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NocPageRoutingModule } from './noc-routing.module';

import { NocPage } from './noc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NocPageRoutingModule
  ],
  declarations: [NocPage]
})
export class NocPageModule {}
