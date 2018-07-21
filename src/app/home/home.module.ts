import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared';

import { HomeComponent } from './home.component';
import { ChartComponent } from './chart/chart.component';
import { NbrowserComponent } from './news_browser/nbrowser.component';
import { NewsServcie } from './news.service';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ],
    declarations: [
        HomeComponent,
        ChartComponent,
        NbrowserComponent
    ],
    providers: [
        NewsServcie
    ]
})

export class HomeModule {}
