import { NgModule } from '@angular/core';

import { SubjectsComponent } from './subjects.component';
import { SubjectsRoutingModule } from './subjects-routing.module';

import { SharedModule } from '../shared';


@NgModule({
  imports: [
    SubjectsRoutingModule,
    SharedModule
  ],
  declarations: [
    SubjectsComponent
  ]
})
export class SubjectsModule { }
