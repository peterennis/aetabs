import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AeplacesPage } from './aeplaces.page';
import { AeplacesRoutingModule } from './aeplaces-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AeplacesRoutingModule
  ],
  declarations: [AeplacesPage]
})
export class AeplacesPageModule { }
