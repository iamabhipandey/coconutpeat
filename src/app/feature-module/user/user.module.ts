import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderComponent } from './common/header/header.component';

import { UserNotificationComponent } from './settings/user-notification/user-notification.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';
import { UserWalletComponent } from './user-wallet/user-wallet.component';
import { UserWishlistComponent } from './user-wishlist/user-wishlist.component';
import { UserSettingsComponent } from './settings/user-settings/user-settings.component';
import { UserSecurityComponent } from './settings/user-security/user-security.component';
import { UserIntegrationComponent } from './settings/user-integration/user-integration.component';

import { UserBookingsComponent } from './user-bookings/user-bookings.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserAddressComponent } from './user-address/user-address.component';

import { UserMessagesComponent } from './user-messages/user-messages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddAddressComponent } from './user-address/add-address/add-address.component';




@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,

    UserPaymentComponent,
    UserReviewsComponent,
    UserWalletComponent,
    UserWishlistComponent,
    UserBookingsComponent,
    UserDashboardComponent,
    UserAddressComponent,
    AddAddressComponent,
    UserMessagesComponent,


  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MatDialogModule
  ]
})
export class UserModule { }
