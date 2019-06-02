import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { AuthGuardService as AuthGuard } from '../core/services/auth-guard.service';

const routes: Routes = [
    {
        path: 'news',
        component: NewsComponent,
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

export class NewsRoutingModule {}
