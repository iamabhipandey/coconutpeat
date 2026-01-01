import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CertificationDetailsComponent } from './certification-details.component';

const routes: Routes = [{ path: '', component: CertificationDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificationDetailsRoutingModule { }
