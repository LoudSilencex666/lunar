import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupsComponent } from './groups.component';
import { AuthGuardService as AuthGuard } from '../core/services/auth-guard.service';

const routes: Routes = [
    {
        path: 'groups',
        component: GroupsComponent,
        canActivate: [AuthGuard]
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

export class GroupsRoutingModule {}
