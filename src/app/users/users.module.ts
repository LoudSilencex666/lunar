import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared';

import { UsersComponent } from './users.component';
import { EditUserComponent } from './editUser/editUser.component';
import { AddUserComponent } from './addUser/addUser.component';
import { DeleteUserComponent } from './deleteUser/deleteUser.component';
import { UserManagementService } from './users-shared.service';




@NgModule({
  imports: [
    CommonModule,
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
    UserManagementService
  ]

})

export class UsersModule { }
