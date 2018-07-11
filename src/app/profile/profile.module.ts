import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';

import { SharedModule } from '../shared';


@NgModule({
  imports: [
    ProfileRoutingModule,
    SharedModule
  ],
  declarations: [
    ProfileComponent
  ]
})
export class ProfileModule { }
