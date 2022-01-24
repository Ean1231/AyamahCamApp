import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteDPage } from './site-d.page';

const routes: Routes = [
  {
    path: '',
    component: SiteDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteDPageRoutingModule {}
