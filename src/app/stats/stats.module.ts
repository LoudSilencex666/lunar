import { NgModule } from '@angular/core';

import { StatsRoutingModule } from './stats-routing.module';
import { StatsComponent } from './stats.component';

import { SharedModule } from '../shared';
import { MarkListComponent } from './mark-list/mark-list.component';
import { StatsService } from './stats.service';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    StatsRoutingModule,
    SharedModule
  ],
  declarations: [
    StatsComponent,
    MarkListComponent
  ],
  providers: [
    StatsService
  ]
})
export class StatsModule { }
