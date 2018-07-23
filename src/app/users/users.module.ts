import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared';

import { UsersComponent } from './users.component';
import { EditUserComponent } from './editUser/editUser.component';
import { AddUserComponent } from './addUser/addUser.component';
import { DeleteUserComponent } from './deleteUser/deleteUser.component';

import { UsersService } from './users.service';




@NgModule({
  imports: [
    UsersRoutingModule,
    SharedModule
  ],
  declarations: [
    UsersComponent,
    AddUserComponent,
    DeleteUserComponent,
    EditUserComponent,
  ],
  providers: [
      UsersService
  ]

})
export class UsersModule { }
