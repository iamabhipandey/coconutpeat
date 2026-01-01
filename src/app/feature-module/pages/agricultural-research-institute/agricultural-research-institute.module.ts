import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgriculturalResearchInstituteRoutingModule } from './agricultural-research-institute-routing.module';


import { AgriculturalResearchInstituteComponent } from './agricultural-research-institute.component';

@NgModule({
  declarations: [AgriculturalResearchInstituteComponent],
  imports: [
    CommonModule,
    AgriculturalResearchInstituteRoutingModule
  ]
})
export class AgriculturalResearchInstituteModule { }
