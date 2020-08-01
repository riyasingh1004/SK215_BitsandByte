import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicePage } from './police.page';

const routes: Routes = [
  {
    path: '',
    component: PolicePage
  },
  {
    path: 'police-details',
    loadChildren: () => import('./police-details/police-details.module').then( m => m.PoliceDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicePageRoutingModule {}
