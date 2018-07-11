import { NgModule } from '@angular/core';

import { GroupsComponent } from './groups.component';
import { GroupsRoutingModule } from './groups-routing.module';

import { SharedModule } from '../shared';

@NgModule({
  imports: [
    GroupsRoutingModule,
    SharedModule
  ],
  declarations: [
    GroupsComponent
  ],
  providers: [
  ]
})
export class GroupsModule {}
