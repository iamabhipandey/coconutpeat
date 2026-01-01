import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsageFarmsComponent } from './usage-farms.component';

const routes: Routes = [{ path: '', component: UsageFarmsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsageFarmsRoutingModule { }
