import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './addUser/addUser.component';
import { DeleteUserComponent } from './deleteUser/deleteUser.component';
import { EditUserComponent } from './editUser/editUser.component';

const routes: Routes = [
    {
        path: 'users',
        component: UsersComponent,
        children: [
            {
                path: 'add',
                component: AddUserComponent
            },
            {
                path: 'delete',
                component: DeleteUserComponent
            },
            {
                path: 'edit',
                component: EditUserComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class UsersRoutingModule {}
