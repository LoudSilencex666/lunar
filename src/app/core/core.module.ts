import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiService, NewsServcie, StatsService, SubjectService, UserService, GroupsService, RolesService } from './services';
import { MessagesService } from './services/messages.service';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmService } from './services/confirm-popup.service';


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
    GroupsService,
    RolesService,
    ConfirmService
  ],
  declarations: []
})

export class CoreModule { }
