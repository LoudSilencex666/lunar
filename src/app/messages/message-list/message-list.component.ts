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
    list: string;
    activeMessage: any;

constructor(
    private messagesService: MessagesService) {}

    ngOnInit() {
        this.messagesService.refreshNeeded$
        .subscribe(() => {
            this.getMessages();
        });

        this.getMessages();

        this.activeMessage = [];
        this.list = 'recieved';
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

    private switch_list(type: string) {
        this.list = type;
        this.activeMessage = [];
    }

    private getContent(i: number, type: string) {
        if (type === 'sent') {
            this.activeMessage = this.sent_messages[i];
        } else if (type === 'recieved') {
            this.activeMessage = this.recieved_messages[i];
        }
    }

    private deleteMessage(id: number) {
        console.log(id);
    }
}
