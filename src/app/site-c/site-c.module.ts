import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiteCPageRoutingModule } from './site-c-routing.module';

import { SiteCPage } from './site-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiteCPageRoutingModule
  ],
  declarations: [SiteCPage]
})
export class SiteCPageModule {}
