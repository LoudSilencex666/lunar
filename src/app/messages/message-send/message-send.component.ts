import { Component, OnInit } from '@angular/core';

import { SentMessage, MessagesService, GroupsService, Group, UserService, User } from '../../core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-message-messagesend',
    templateUrl: './message-send.component.html',
    styleUrls: ['./message-send.component.css']
})

export class MessageSendComponent implements OnInit {
    messageForm: FormGroup;
    message: SentMessage[];
    groups: Group[];
    users: User[];
    currentUser: any;
    value: any;

constructor(
    private userService: UserService,
    private groupsService: GroupsService,
    private messagesService: MessagesService,
    private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.groupsService.getGroups()
        .subscribe((groups: Group[]) => {
            console.log(groups);
            this.groups = groups;
        });

        this.userService.getCurrentUser()
        .subscribe((user: User) => {
            this.currentUser = user['id'];
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
            this.userService.getAllUsers()
            .subscribe((users: User[]) => {
                this.users = users.filter(val => val.group_id === this.value && val.id !== this.currentUser);
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
