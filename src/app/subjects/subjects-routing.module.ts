import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectsComponent } from './subjects.component';
import { AuthGuardService as AuthGuard } from '../core/services/auth-guard.service';

const routes: Routes = [
    {
        path: 'subjects',
        component: SubjectsComponent,
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

export class SubjectsRoutingModule {}
