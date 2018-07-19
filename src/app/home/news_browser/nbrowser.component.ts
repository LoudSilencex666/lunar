import { Component, Input, OnInit } from '@angular/core';
import { NewsServcie } from '../news.service';
import { NewsModel } from '../../core';



@Component({
    selector: 'app-home-nbrowser',
    templateUrl: './nbrowser.component.html',
    styleUrls: ['./nbrowser.component.css']
})

export class NbrowserComponent implements OnInit {
    newsModel = NewsModel;

    constructor(private newsService: NewsServcie) {}

    ngOnInit() {
        this.newsService.getNews();
    }
}
