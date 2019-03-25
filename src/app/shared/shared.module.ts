import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [CommonModule, IonicModule, FormsModule, HeaderComponent]
})
export class SharedModule {}
