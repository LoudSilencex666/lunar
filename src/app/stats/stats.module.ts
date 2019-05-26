import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsComponent } from './stats.component';
import { MarkListComponent } from './mark-list/mark-list.component';

import { SharedModule } from '../shared';
import { StatsRoutingModule } from './stats-routing.module';
import { CoreModule } from '../core';



@NgModule({
  imports: [
    CommonModule,
    StatsRoutingModule,
    SharedModule,
    CoreModule
  ],
  declarations: [
    StatsComponent,
    MarkListComponent
  ],
  providers: [
  ]
})
export class StatsModule { }
