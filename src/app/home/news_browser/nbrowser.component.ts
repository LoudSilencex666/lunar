import { Component, Input, OnInit } from '@angular/core';
import { NewsServcie } from '../news.service';
import { NewsTitle, NewsContent } from '../../core';



@Component({
    selector: 'app-home-nbrowser',
    templateUrl: './nbrowser.component.html',
    styleUrls: ['./nbrowser.component.css']
})

export class NbrowserComponent implements OnInit {
    titles: NewsTitle[];
    content: NewsContent[];
    constructor(private newsService: NewsServcie) {}

    ngOnInit() {
        this.newsService.getNewsTitle()
        .subscribe((data: NewsTitle[]) => {
            this.titles = data;
        });
    }

    getNewsContentData() {
        this.newsService.getNewsContent();
    }

}
