import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerOrganizationsRoutingModule } from './partner-organizations-routing.module';


import { PartnerOrganizationsComponent } from './partner-organizations.component';

@NgModule({
  declarations: [PartnerOrganizationsComponent],
  imports: [
    CommonModule,
    PartnerOrganizationsRoutingModule
  ]
})
export class PartnerOrganizationsModule { }
