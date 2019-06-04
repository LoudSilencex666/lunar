import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiService, NewsServcie, StatsService, SubjectService, UserService } from './services';
import { MessagesService } from './services/messages.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    UserService,
    NewsServcie,
    StatsService,
    SubjectService,
    MessagesService,
    CookieService,
  ],
  declarations: []
})

export class CoreModule { }
