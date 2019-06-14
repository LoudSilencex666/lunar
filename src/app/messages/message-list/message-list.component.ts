import { Component, OnInit } from '@angular/core';
import { RecievedMessage, MessagesService, ConfirmService } from '../../core';

@Component({
    selector: 'app-messages-messagelist',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.css']
})

export class MessageListComponent implements OnInit {
    recieved_messages: RecievedMessage[];
    sent_messages: RecievedMessage[];
    list: string;
    activeMessage: any;

constructor(
    private messagesService: MessagesService,
    private confirmService: ConfirmService
    ) {}

    ngOnInit() {
        this.messagesService.refreshNeeded$
        .subscribe(() => {
            this.getMessages();
        });

        this.getMessages();
        this.passValues();

        this.activeMessage = [];
        this.list = 'recieved';
    }

    private passValues() {
        this.confirmService.changeWindowValues({
            message: 'Are you sure you want to delete this message?',
            buttonValue: 'Delete',
        });
    }

    private getMessages() {
        this.messagesService.getSentMessages()
        .subscribe((s_messages: RecievedMessage[]) => {
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

    private async deleteMessage(id: number) {
        this.confirmService.changeWindowState('opened');
        await this.confirmService.confirmation().then(() => {
            this.messagesService.deleteMessage(id)
            .subscribe(() => {
                this.getMessages();
            }, (err) => console.log(err));
        }).catch(() => {
            console.log('Activity cancelled');
        });
    }
}
