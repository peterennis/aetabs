import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AeauthPage } from './aeauth.page';

const routes: Routes = [
  {
    path: '',
    component: AeauthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AeauthPage]
})
export class AeauthPageModule { }
