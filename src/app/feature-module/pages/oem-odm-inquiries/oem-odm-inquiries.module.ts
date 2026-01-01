import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OemOdmInquiriesRoutingModule } from './oem-odm-inquiries-routing.module';


import { OemOdmInquiriesComponent } from './oem-odm-inquiries.component';

@NgModule({
  declarations: [OemOdmInquiriesComponent],
  imports: [
    CommonModule,
    OemOdmInquiriesRoutingModule
  ]
})
export class OemOdmInquiriesModule { }
