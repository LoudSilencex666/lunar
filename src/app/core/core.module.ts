import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiService, NewsServcie, StatsService, SubjectService,
         UsersService, GroupsService, RolesService, UserService } from './services';
import { MessagesService } from './services/messages.service';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmService } from './services/confirm-popup.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    UsersService,
    NewsServcie,
    StatsService,
    SubjectService,
    MessagesService,
    CookieService,
    GroupsService,
    RolesService,
    ConfirmService,
    UserService
  ],
  declarations: []
})

export class CoreModule { }
