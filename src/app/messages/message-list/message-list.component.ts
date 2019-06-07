import { Component, OnInit } from '@angular/core';
import { RecievedMessage, MessagesService } from '../../core';

@Component({
    selector: 'app-messages-messagelist',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.css']
})

export class MessageListComponent implements OnInit {
    messages: RecievedMessage[];

constructor(
    private messagesService: MessagesService) {}

    ngOnInit() {
        this.messagesService.getMessages()
        .subscribe((data: RecievedMessage[]) => {
            console.log(data);
            this.messages = data;
            });
    }
}
