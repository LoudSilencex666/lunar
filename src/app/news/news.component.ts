import { Component, OnInit } from '@angular/core';
import { ConfirmService } from '../core';


@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {

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
