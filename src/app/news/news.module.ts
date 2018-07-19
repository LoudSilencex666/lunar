import { NgModule } from '@angular/core';

import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news-routing.module';

import { SharedModule } from '../shared';

@NgModule({
  imports: [
        SharedModule,
        NewsRoutingModule
    ],
    declarations: [
      NewsComponent
    ],
    providers: [
    ]
})
export class NewsModule { }
