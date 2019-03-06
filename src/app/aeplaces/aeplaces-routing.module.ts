import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AeplacesPage } from './aeplaces.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: AeplacesPage,
        children: [{
            path: 'discover', children: [
                {
                    path: '',
                    loadChildren: './aediscover/aediscover.module#AediscoverPageModule'
                },
                {
                    path: ':placeId',
                    loadChildren: './aediscover/aeplace-detail/aeplace-detail.module#AeplaceDetailPageModule'
                }
            ]
        }]
    },
    {
        path: 'offers',
        children: [
            {
                path: '',
                loadChildren: './aeoffers/aeoffers.module#AeoffersPageModule'
            },
            {
                path: 'new',
                loadChildren: './aeoffers/aenew-offer.module#AenewOfferPageModule'
            },
            {
                path: 'edit/:placeId',
                loadChildren: './aeoffers/aeedit-offer.module#AeeditOfferPageModule'
            },
            {
                path: 'placeId',
                loadChildren: './aeoffers/aeoffer-bookings/aeoffer-bookings.module#AeofferBookingsPageModule'
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AeplacesRoutingModule { }
