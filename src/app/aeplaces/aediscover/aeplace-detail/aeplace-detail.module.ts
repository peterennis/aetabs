import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AeplaceDetailPage } from './aeplace-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AeplaceDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AeplaceDetailPage]
})
export class AeplaceDetailPageModule {}
