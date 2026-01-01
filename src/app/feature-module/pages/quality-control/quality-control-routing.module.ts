import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QualityControlComponent } from './quality-control.component';

const routes: Routes = [{ path: '', component: QualityControlComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QualityControlRoutingModule { }
