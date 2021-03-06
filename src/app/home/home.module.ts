import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared';

import { HomeComponent } from './home.component';
import { ChartComponent } from './chart/chart.component';
import { NbrowserComponent } from './news_browser/nbrowser.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core';
import { AuthGuardService } from '../core/services/auth-guard.service';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        CoreModule
    ],
    declarations: [
        HomeComponent,
        ChartComponent,
        NbrowserComponent
    ],
    providers: [
        AuthGuardService
    ]
})

export class HomeModule {}
