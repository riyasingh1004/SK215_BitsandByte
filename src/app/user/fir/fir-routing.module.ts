import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirPage } from './fir.page';

const routes: Routes = [
  {
    path: '',
    component: FirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirPageRoutingModule {}
