import { Component, OnInit } from '@angular/core';
import { ConfirmService } from '../core';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {

    windowState: string;

    constructor(private confirmService: ConfirmService) { }

    ngOnInit() {
        this.confirmService.currentWindowState
        .subscribe((value: any) => {
            this.windowState = value;
            console.log(this.windowState);
        });
    }
}
