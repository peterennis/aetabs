import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AeofferBookingsPage } from './aeoffer-bookings.page';

const routes: Routes = [
  {
    path: '',
    component: AeofferBookingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AeofferBookingsPage]
})
export class AeofferBookingsPageModule {}
