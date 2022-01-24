import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectSSitePageRoutingModule } from './select-s-site-routing.module';

import { SelectSSitePage } from './select-s-site.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectSSitePageRoutingModule
  ],
  declarations: [SelectSSitePage]
})
export class SelectSSitePageModule {}
