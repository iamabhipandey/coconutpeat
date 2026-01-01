import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OemOdmInquiriesComponent } from './oem-odm-inquiries.component';

const routes: Routes = [{ path: '', component: OemOdmInquiriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OemOdmInquiriesRoutingModule { }
