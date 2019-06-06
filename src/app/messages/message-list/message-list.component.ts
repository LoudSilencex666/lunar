import { Component, OnInit } from '@angular/core';
import { Messages, MessagesService } from '../../core';

@Component({
    selector: 'app-messages-messagelist',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.css']
})

export class MessageListComponent implements OnInit {
    messages: Messages[];

constructor(
    private messagesService: MessagesService) {}

    ngOnInit() {
        this.messagesService.getMessages()
        .subscribe((data: Messages[]) => {
            console.log(data);
            this.messages = data;
            });
    }
}
