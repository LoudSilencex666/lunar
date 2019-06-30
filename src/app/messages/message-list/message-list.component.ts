import { Component, OnInit } from '@angular/core';
import { RecievedMessage, MessagesService, ConfirmService } from '../../core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-messages-messagelist',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.css']
})

export class MessageListComponent implements OnInit {
    filterForm: FormGroup;
    recieved_messages: RecievedMessage[];
    sent_messages: RecievedMessage[];
    list: string;
    activeMessage: any;
    active_index: number;
    filter_value: string;

constructor(
    private messagesService: MessagesService,
    private confirmService: ConfirmService,
    private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.messagesService.refreshNeeded$
        .subscribe(() => {
            this.getMessages();
            this.resetList();
            this.clearSearch();
        });

        this.getMessages();
        this.passValues();

        this.activeMessage = [];
        this.list = 'recieved';

        this.filterForm = this.formBuilder.group({
            searchValue: [''],
            condition: [null]
        });

        this.onChanges();
    }

    // Detect search changes
    private onChanges() {
        this.filterForm.get('searchValue').valueChanges
        .subscribe((value) => {
            this.filter_value = value;
            if (this.list === 'recieved') {
                if (this.filterForm.get('condition').value === 'Title') {
                    this.messagesService.getRecievedMessages()
                    .subscribe((r_messages: RecievedMessage[]) => {
                        this.recieved_messages = r_messages.filter(val => val.title.includes(this.filter_value));
                    });
                } else if (this.filterForm.get('condition').value === 'User') {
                    this.messagesService.getRecievedMessages()
                    .subscribe((r_messages: RecievedMessage[]) => {
                        this.sent_messages = r_messages.filter(val => val.lastname.includes(this.filter_value));
                    });
                }
            } else if (this.list === 'sent') {
                if (this.filterForm.get('condition').value === 'Title') {
                    this.messagesService.getSentMessages()
                    .subscribe((s_messages: RecievedMessage[]) => {
                        this.sent_messages = s_messages.filter(val => val.title.includes(this.filter_value));
                    });
                } else if (this.filterForm.get('condition').value === 'User') {
                    this.messagesService.getSentMessages()
                    .subscribe((s_messages: RecievedMessage[]) => {
                        this.sent_messages = s_messages.filter(val => val.lastname.includes(this.filter_value));
                    });
                }
            }
        });
    }

    // Clear search box + reset list
    private clearSearch() {
        this.filterForm.get('searchValue').setValue('');
    }

    // Set values to popup window
    private passValues() {
        this.confirmService.changeWindowValues({
            message: 'Are you sure you want to delete this message?',
            buttonValue: 'Delete'
        });
    }

    // Clears values of selected message
    private resetList() {
        this.activeMessage = [];
        this.active_index = undefined;
    }

    // Gets value of all messages
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

    // list picker
    private switch_list(type: string) {
        this.list = type;
        this.resetList();
    }

    // expands selected message
    private getContent(i: number, type: string) {
        if (type === 'sent') {
            this.activeMessage = this.sent_messages[i];
            this.active_index = i;
        } else if (type === 'recieved') {
            this.activeMessage = this.recieved_messages[i];
            this.active_index = i;
        }
    }

    // deletes selected message
    private async deleteMessage(id: number) {
        this.confirmService.changeWindowState('opened');
        await this.confirmService.confirmation().then(() => {
            this.messagesService.deleteMessage(id)
            .subscribe(() => {
                this.getMessages();
                this.resetList();
            }, (err) => console.log(err));
        }).catch(() => {
            console.log('Activity cancelled');
        });
    }
}
