import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AenewOfferPage } from './aenew-offer.page';

const routes: Routes = [
  {
    path: '',
    component: AenewOfferPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AenewOfferPage]
})
export class AenewOfferPageModule { }
