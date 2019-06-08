import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationsPage } from './notifications.page';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: NotificationsPage
  }
];

/*
const routes: Routes = [
  {
    path: './settings/notifications',
    component: NotificationsPage,
    children: [
      {
        path: 'notifications', children: [
          {
            path: '',
            loadChildren: './notifications/notifications.module#NotificationsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/aeplaces/tabs/discover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: './settings/notifications',
    pathMatch: 'full'
  }
];
*/

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NotificationsPage]
})
export class NotificationsPageModule { }
