import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'ambigram', loadChildren: './ambigram/ambigram.module#AmbigramPageModule' },
  { path: 'family', loadChildren: './family/family.module#FamilyPageModule' },  { path: 'aeauth', loadChildren: './aeauth/aeauth.module#AeauthPageModule' },
  { path: 'aeplaces', loadChildren: './aeplaces/aeplaces.module#AeplacesPageModule' },
  { path: 'aediscover', loadChildren: './aeplaces/aediscover/aediscover.module#AediscoverPageModule' },
  { path: 'aeoffers', loadChildren: './aeplaces/aeoffers/aeoffers.module#AeoffersPageModule' },
  { path: 'aenew-offer', loadChildren: './aeplaces/aeoffers/aenew-offer/aenew-offer.module#AenewOfferPageModule' },
  { path: 'aeedit-offer', loadChildren: './aeplaces/aeoffers/aeedit-offer/aeedit-offer.module#AeeditOfferPageModule' },
  { path: 'aeplace-detail', loadChildren: './aeplaces/aediscover/aeplace-detail/aeplace-detail.module#AeplaceDetailPageModule' },
  { path: 'aeplace-bookings', loadChildren: './aeplaces/aeoffers/aeplace-bookings/aeplace-bookings.module#AeplaceBookingsPageModule' },
  { path: 'aeoffer-bookings', loadChildren: './aeplaces/aeoffers/aeoffer-bookings/aeoffer-bookings.module#AeofferBookingsPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }