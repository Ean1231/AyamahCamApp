import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewdocsPage } from './viewdocs.page';

const routes: Routes = [
  {
    path: '',
    component: ViewdocsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewdocsPageRoutingModule {}
