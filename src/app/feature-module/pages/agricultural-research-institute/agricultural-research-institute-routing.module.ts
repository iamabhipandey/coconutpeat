import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgriculturalResearchInstituteComponent } from './agricultural-research-institute.component';

const routes: Routes = [{ path: '', component: AgriculturalResearchInstituteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgriculturalResearchInstituteRoutingModule { }
