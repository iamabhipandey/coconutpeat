import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

import { UserSettingsComponent } from './settings/user-settings/user-settings.component';
import { UserWalletComponent } from './user-wallet/user-wallet.component';
import { UserWishlistComponent } from './user-wishlist/user-wishlist.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';

import { UserNotificationComponent } from './settings/user-notification/user-notification.component';

import { UserBookingsComponent } from './user-bookings/user-bookings.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserIntegrationComponent } from './settings/user-integration/user-integration.component';
import { UserMessagesComponent } from './user-messages/user-messages.component';
import { UserSecurityComponent } from './settings/user-security/user-security.component';


import { FrequentlyAskedQuestionsComponent } from './frequently-asked-questions/frequently-asked-questions.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [


      {
        path: 'faquestions',
        component: FrequentlyAskedQuestionsComponent,
      },
      {
        path: 'user-wallet',
        component: UserWalletComponent,
      },
      {
        path: 'user-wishlist',
        component: UserWishlistComponent,
      },
      {
        path: 'user-payment',
        component: UserPaymentComponent,
      },
      {
        path: 'user-review',
        component: UserReviewsComponent,
      },


      {
        path: 'user-bookings',
        component: UserBookingsComponent,
      },
      {
        path: 'user-dashboard',
        component: UserDashboardComponent,
      },
      {
        path: 'shipping-address',
        component: UserAddressComponent,
      },
      {
        path: 'user-messages',
        component: UserMessagesComponent,
      },



      {
        path: 'my-orders',
        loadChildren: () =>
          import('./my-order/my-order.module').then((m) => m.MyOrderModule),
      },

      {
        path: 'tracking-order',
        loadChildren: () =>
          import('./tracking-order/tracking-order.module').then((m) => m.TrackingOrderModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
