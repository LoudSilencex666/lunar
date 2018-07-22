import { Component, OnInit } from '@angular/core';
import { NewsServcie } from '../news.service';
import { News } from '../../core';
import { config } from 'rxjs';

@Component({
    selector: 'app-home-nbrowser',
    templateUrl: './nbrowser.component.html',
    styleUrls: ['./nbrowser.component.css']
})

export class NbrowserComponent implements OnInit {
    news: News[];
    activeContent = {};
    constructor(private newsService: NewsServcie) {}

    ngOnInit() {
        this.newsService.getNews()
        .subscribe((data: News[]) => {
            this.news = data;
        });
    }

    getContent(i: number) {
        this.activeContent = this.news[i];
        console.log(this.activeContent);
    }
}
