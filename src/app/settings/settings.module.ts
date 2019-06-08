import { NgModule } from '@angular/core';
import { SettingsPage } from './settings.page';
import { SharedModule } from '../shared/shared.module';

import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  imports: [
    SharedModule,
    SettingsRoutingModule
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule { }
