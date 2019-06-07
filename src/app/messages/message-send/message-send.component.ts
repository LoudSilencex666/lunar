import { Component, OnInit } from '@angular/core';

import { SentMessage, MessagesService, GroupsService, Groups, UsersService, UserModel } from '../../core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-message-messagesend',
    templateUrl: './message-send.component.html',
    styleUrls: ['./message-send.component.css']
})

export class MessageSendComponent implements OnInit {
    messageForm: FormGroup;
    message: SentMessage[];
    groups: Groups[];
    users: UserModel[];
    value: any;

constructor(
    private usersService: UsersService,
    private groupsService: GroupsService,
    private messagesService: MessagesService,
    private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.groupsService.getGroups()
        .subscribe((data: Groups[]) => {
            console.log(data);
            this.groups = data;
        });

        this.messageForm = this.formBuilder.group({
            title: [''],
            content: [''],
            user_id: [''],
            groups: ['']
        });

        this.onChanges();
    }

    onChanges() {
        this.messageForm.get('groups').valueChanges
        .subscribe((value) => {
            this.value = +value;
            console.log(typeof this.value);
            this.usersService.getUsers()
            .subscribe((users: UserModel[]) => {
                this.users = users.filter(val => val.group_id === this.value);
                console.log(this.users);
            });
        });
    }

    send() {
        this.messagesService.sendMessage(this.messageForm.value)
        .subscribe((info) => {
            console.log(info);
        });
    }

}
