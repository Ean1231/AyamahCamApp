import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectSSitePage } from './select-s-site.page';

const routes: Routes = [
  {
    path: '',
    component: SelectSSitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectSSitePageRoutingModule {}
