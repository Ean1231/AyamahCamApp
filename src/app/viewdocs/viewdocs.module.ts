import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewdocsPageRoutingModule } from './viewdocs-routing.module';

import { ViewdocsPage } from './viewdocs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewdocsPageRoutingModule
  ],
  declarations: [ViewdocsPage]
})
export class ViewdocsPageModule {}
