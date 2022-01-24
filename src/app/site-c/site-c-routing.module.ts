import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteCPage } from './site-c.page';

const routes: Routes = [
  {
    path: '',
    component: SiteCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteCPageRoutingModule {}
