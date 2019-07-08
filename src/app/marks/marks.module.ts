import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarksRoutingModule } from './marks-routing.module';
import { SharedModule } from '../shared';

import { MarksComponent } from './marks.component';
import { AdminMarksComponent } from './admin/admin-marks.component';
import { GlobalAdminMarksComponent } from './admin/add-global-marks/global-admin-marks.component';
import { CurrentAdminMarksComponent } from './admin/add-current-marks/current-admin-marks.component';
import { UserMarksComponent } from './user/user-marks.component';

@NgModule({
  imports: [
    CommonModule,
    MarksRoutingModule,
    SharedModule
  ],
  declarations: [
    MarksComponent,
    UserMarksComponent,
    AdminMarksComponent,
    GlobalAdminMarksComponent,
    CurrentAdminMarksComponent
  ]
})
export class MarksModule { }
