import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutPage } from './about.page';

@NgModule({
  imports: [ 
    FormsModule, 
    MbscModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: AboutPage }])
  ],
  declarations: [AboutPage]
})
export class AboutPageModule {}
