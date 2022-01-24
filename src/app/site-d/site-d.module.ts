import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiteDPageRoutingModule } from './site-d-routing.module';

import { SiteDPage } from './site-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiteDPageRoutingModule
  ],
  declarations: [SiteDPage]
})
export class SiteDPageModule {}
