import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificationDetailsRoutingModule } from './certification-details-routing.module';


import { CertificationDetailsComponent } from './certification-details.component';

@NgModule({
  declarations: [CertificationDetailsComponent],
  imports: [
    CommonModule,
    CertificationDetailsRoutingModule
  ]
})
export class CertificationDetailsModule { }
