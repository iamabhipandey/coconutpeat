import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CocopeatComponent } from './cocopeat.component';

const routes: Routes = [{ path: '', component: CocopeatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocopeatRoutingModule { }
