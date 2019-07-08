import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarksComponent } from './marks.component';
import { AuthGuardService as AuthGuard } from '../core/services/auth-guard.service';
import { AdminMarksComponent } from './admin/admin-marks.component';
import { UserMarksComponent } from './user/user-marks.component';

const routes: Routes = [
    {
        path: 'marks',
        component: MarksComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'user',
                pathMatch: 'full'
            },
            {
                path: 'admin',
                component: AdminMarksComponent
            },
            {
                path: 'user',
                component: UserMarksComponent
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

export class MarksRoutingModule {}
