import { NgModule } from '@angular/core';

import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news-routing.module';

import { SharedModule } from '../shared';
import { CoreModule } from '../core';


@NgModule({
  imports: [
        SharedModule,
        NewsRoutingModule,
        CoreModule
    ],
    declarations: [
      NewsComponent
    ],
    providers: [
    ]
})
export class NewsModule { }
