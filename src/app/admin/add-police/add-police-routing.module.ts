import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPolicePage } from './add-police.page';

const routes: Routes = [
  {
    path: '',
    component: AddPolicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPolicePageRoutingModule {}
