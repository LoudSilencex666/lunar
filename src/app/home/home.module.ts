import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared';
import { HeaderComponent } from '../shared/layout/header/header.component';
import { SidebarComponent } from '../shared/layout/sidebar/sidebar.component';
import { ChartComponent } from './chart/chart.component';
import { NbrowserComponent } from './news_browser/nbrowser.component';


@NgModule({
    imports: [
        HomeRoutingModule,
        SharedModule
    ],
    declarations: [
        HomeComponent,
        HeaderComponent,
        SidebarComponent,
        ChartComponent,
        NbrowserComponent
    ],
    providers: [
    ]
})

export class HomeModule {}
