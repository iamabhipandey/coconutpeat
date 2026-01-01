import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PartnerOrganizationsComponent } from './partner-organizations.component';

const routes: Routes = [{ path: '', component: PartnerOrganizationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerOrganizationsRoutingModule { }
