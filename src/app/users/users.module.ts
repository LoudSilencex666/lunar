import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';

import { SharedModule } from '../shared';


@NgModule({
  imports: [
    UsersRoutingModule,
    SharedModule
  ],
  declarations: [
    UsersComponent
  ]
})
export class UsersModule { }
