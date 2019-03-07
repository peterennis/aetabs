import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AebookingsPage } from './aebookings.page';

const routes: Routes = [
  {
    path: '',
    component: AebookingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AebookingsPage]
})
export class AebookingsPageModule { }
