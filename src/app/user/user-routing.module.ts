import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPage } from './user.page';

const routes: Routes = [
  {
    path: '',
    component: UserPage
  },
  {
    path: 'fir',
    loadChildren: () => import('./fir/fir.module').then( m => m.FirPageModule)
  },
  {
    path: 'noc',
    loadChildren: () => import('./noc/noc.module').then( m => m.NocPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
