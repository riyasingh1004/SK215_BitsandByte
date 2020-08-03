import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NocPage } from './noc.page';

const routes: Routes = [
  {
    path: '',
    component: NocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NocPageRoutingModule {}
