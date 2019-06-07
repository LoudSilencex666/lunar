import { Component, OnInit } from '@angular/core';
import { RecievedMessage, MessagesService, SentMessage } from '../../core';

@Component({
    selector: 'app-messages-messagelist',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.css']
})

export class MessageListComponent implements OnInit {
    recieved_messages: RecievedMessage[];
    sent_messages: SentMessage[];

constructor(
    private messagesService: MessagesService) {}

    ngOnInit() {
        this.messagesService.refreshNeeded$
        .subscribe(() => {
            this.getMessages();
        });

        this.getMessages();
    }

    private getMessages() {
    this.messagesService.getSentMessages()
        .subscribe((s_messages: SentMessage[]) => {
            console.log(s_messages);
            this.sent_messages = s_messages;
        });

        this.messagesService.getRecievedMessages()
        .subscribe((r_messages: RecievedMessage[]) => {
            console.log(r_messages);
            this.recieved_messages = r_messages;
            });
    }
}
