import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AeplaceBookingsPage } from './aeplace-bookings.page';

const routes: Routes = [
  {
    path: '',
    component: AeplaceBookingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AeplaceBookingsPage]
})
export class AeplaceBookingsPageModule {}
