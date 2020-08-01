import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicePage } from './police.page';

const routes: Routes = [
  {
    path: '',
    component: PolicePage
<<<<<<< HEAD
  },
  {
    path: 'police-details',
    loadChildren: () => import('./police-details/police-details.module').then( m => m.PoliceDetailsPageModule)
=======
>>>>>>> 3b565173bda012eb6e447abdb1bc41aea420aa13
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicePageRoutingModule {}
