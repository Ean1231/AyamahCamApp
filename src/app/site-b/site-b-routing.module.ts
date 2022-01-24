import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteBPage } from './site-b.page';

const routes: Routes = [
  {
    path: '',
    component: SiteBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteBPageRoutingModule {}
