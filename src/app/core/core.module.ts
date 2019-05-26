import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiService, NewsServcie, StatsService, SubjectService } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    NewsServcie,
    StatsService,
    SubjectService
  ],
  declarations: []
})

export class CoreModule { }
