import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocopeatRoutingModule } from './cocopeat-routing.module';


import { CocopeatComponent } from './cocopeat.component';

@NgModule({
  declarations: [CocopeatComponent],
  imports: [
    CommonModule,
    CocopeatRoutingModule
  ]
})
export class CocopeatModule { }
