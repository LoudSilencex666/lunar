import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesComponent } from './messages.component';
import { MessagesRoutingModule } from './messages-routing.module';

import { SharedModule } from '../shared';
import { CoreModule } from '../core';
import { MessageListComponent } from './message-list/message-list.component';



@NgModule({
  imports: [
        CommonModule,
        SharedModule,
        MessagesRoutingModule,
        CoreModule
    ],
    declarations: [
      MessagesComponent,
      MessageListComponent
    ],
    providers: [
    ]
})
export class MessagesModule { }
