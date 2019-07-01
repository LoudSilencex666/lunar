import { Component, OnInit } from '@angular/core';
import { NewsServcie, RecievedNews } from 'src/app/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
    selector: 'app-news-newslist-user',
    templateUrl: './news-list-user.component.html',
    styleUrls: ['./news-list-user.component.css']
})

export class NewsListUserComponent implements OnInit {
    filterForm: FormGroup;
    recieved_news: RecievedNews[];
    filter_value: string;
    activeNews: any;
    active_index: number;

    constructor(
        private newsService: NewsServcie,
        private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.resetList();
        this.getNews();

        this.filterForm = this.formBuilder.group({
            searchValue: [''],
            condition: [null]
        });

        this.onChanges();
    }

    getNews() {
        this.newsService.getUserNews()
        .subscribe((news: RecievedNews[]) => {
            this.recieved_news = news;
        });
    }

    onChanges(): void {
        this.filterForm.get('searchValue').valueChanges
        .subscribe((value) => {
            this.filter_value = value;
            if (this.filterForm.get('condition').value === 'Title') {
                this.newsService.getUserNews()
                .subscribe((news: RecievedNews[]) => {
                    this.recieved_news = news.filter(val => val.title.includes(this.filter_value));
                });
            } else if (this.filterForm.get('condition').value === 'User') {
                this.newsService.getUserNews()
                .subscribe((news: RecievedNews[]) => {
                    this.recieved_news = news.filter(val => val.lastname.includes(this.filter_value));
                });
            }
        });
    }

    resetList() {
        this.activeNews = [];
        this.active_index = undefined;
    }

    getContent(i: number) {
        if (i === this.active_index) {
            this.resetList();
        } else {
            this.activeNews = this.recieved_news[i];
            this.active_index = i;
        }
    }

    clearSearch() {
        this.filterForm.get('searchValue').setValue('');
    }
}
