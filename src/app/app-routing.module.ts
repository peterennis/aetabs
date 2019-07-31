import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  /*{ path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },*/
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  /*{ path: 'ambigram', loadChildren: './ambigram/ambigram.module#AmbigramPageModule' },*/
  { path: 'ambigram', loadChildren: () => import('./ambigram/ambigram.module').then(m => m.AmbigramPageModule) },


  { path: 'family', loadChildren: './family/family.module#FamilyPageModule' },
  { path: 'aeauth', loadChildren: './aeauth/aeauth.module#AeauthPageModule' },
  { path: 'aeplaces', loadChildren: './aeplaces/aeplaces.module#AeplacesPageModule' },
  { path: 'aebookings', loadChildren: './aebookings/aebookings.module#AebookingsPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },

];



/*
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
];
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
