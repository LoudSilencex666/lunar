import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared';

import { HomeComponent } from './home.component';
import { ChartComponent } from './chart/chart.component';
import { NbrowserComponent } from './news_browser/nbrowser.component';


@NgModule({
    imports: [
        HomeRoutingModule,
        SharedModule
    ],
    declarations: [
        HomeComponent,
        ChartComponent,
        NbrowserComponent
    ],
    providers: [
    ]
})

export class HomeModule {}
