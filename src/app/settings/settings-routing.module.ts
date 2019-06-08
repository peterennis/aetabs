import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: './settings',
    component: SettingsPage,
    children: [
      {
        path: 'notifications', children: [
          {
            path: '',
            loadChildren: './notifications/notifications.module#NotificationsPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: './settings',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
