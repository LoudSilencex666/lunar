import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesComponent } from './messages.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageSendComponent } from './message-send/message-send.component';

import { SharedModule } from '../shared';
import { CoreModule } from '../core';




@NgModule({
  imports: [
        CommonModule,
        SharedModule,
        MessagesRoutingModule,
        CoreModule
    ],
    declarations: [
      MessagesComponent,
      MessageListComponent,
      MessageSendComponent
    ],
    providers: [
    ]
})
export class MessagesModule { }
