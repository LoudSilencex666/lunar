import { NgModule } from '@angular/core';

import { NewsComponent } from './news.component';
import { NewsSendComponent } from './news-send/news-send.component';

import { NewsRoutingModule } from './news-routing.module';
import { SharedModule } from '../shared';
import { CoreModule } from '../core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NewsListAdminComponent } from './news-list/news-list-admin/news-list-admin.component';



@NgModule({
  imports: [
        SharedModule,
        NewsRoutingModule,
        CoreModule,
        FormsModule,
        BrowserModule
    ],
    declarations: [
      NewsComponent,
      NewsSendComponent,
      NewsListAdminComponent
    ],
    providers: [
    ]
})
export class NewsModule { }
