import { Component, OnInit } from '@angular/core';
import { Messages, MessagesService } from '../../core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-message-messagesend',
    templateUrl: './message-send.component.html',
    styleUrls: ['./message-send.component.css']
})

export class MessageSendComponent implements OnInit {
    messageForm: FormGroup;
    message: Messages[];

constructor(
    private messagesService: MessagesService,
    private formBuilder: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {}

    createForm() {
        this.messageForm = this.formBuilder.group({
            title: ['', Validators.required],
            content: ['', Validators.required],
            author: ['', Validators.required],
            user_id: ['', Validators.required]
        });
    }

    send() {}
}
