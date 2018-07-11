import { NgModule } from '@angular/core';

import { StatsRoutingModule } from './stats-routing.module';
import { StatsComponent } from './stats.component';

import { SharedModule } from '../shared';



@NgModule({
  imports: [
    StatsRoutingModule,
    SharedModule
  ],
  declarations: [
    StatsComponent
  ]
})
export class StatsModule { }
