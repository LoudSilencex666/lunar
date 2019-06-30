import { Component, OnInit } from '@angular/core';

import { MessagesService, GroupsService, Group, UserService, UsersService, User } from '../../core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-message-messagesend',
    templateUrl: './message-send.component.html',
    styleUrls: ['./message-send.component.css']
})

export class MessageSendComponent implements OnInit {
    messageForm: FormGroup;
    groups: Group[];
    users: User[];
    currentUser: any;
    value: any;

constructor(
    private userService: UserService,
    private usersService: UsersService,
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
            title: ['', [Validators.required]],
            content: ['', [Validators.required]],
            user_id: [null, [Validators.required]],
            groups: [null, [Validators.required]]
        });

        this.onChanges();
    }

    onChanges() {
        this.messageForm.get('groups').valueChanges
        .subscribe((value) => {
            this.value = +value;
            this.usersService.getAllUsers()
            .subscribe((users: User[]) => {
                this.users = users.filter(val => val.group_id === this.value && val.id !== this.currentUser);
            });
        });
    }

    reset() {
        this.messageForm.reset();
    }

    send() {
        this.messagesService.sendMessage(this.messageForm.value)
        .subscribe((info) => {
            console.log(info);
            this.reset();
        });
    }

}
