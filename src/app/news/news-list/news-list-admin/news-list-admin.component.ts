import { Component, OnInit } from '@angular/core';
import { NewsServcie, RecievedNews, UserService, User, ConfirmService } from 'src/app/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-news-newslist-admin',
    templateUrl: './news-list-admin.component.html',
    styleUrls: ['./news-list-admin.component.css']
})

export class NewsListAdminComponent implements OnInit {
    filterForm: FormGroup;
    recieved_news: RecievedNews[];
    filtered_news: RecievedNews[];
    currentUser: number;
    activeNews: any;
    active_index: number;
    list: boolean;
    filter_value: string;
    groups: any;
    activeGroups: any;

constructor(
    private userService: UserService,
    private newsService: NewsServcie,
    private formBuilder: FormBuilder,
    private confrimService: ConfirmService) {}

    ngOnInit() {
        this.newsService.refreshNeeded$
        .subscribe(() => {
            this.clearSearch();
            this.getNews();
            this.clearSearch();
            this.resetList();
        });

        this.resetList();
        this.getGroups();
        this.getNews();
        this.passValues();

        this.list = false;

        this.filterForm = this.formBuilder.group({
            searchValue: [''],
            condition: [null],
            filterAuthor: [false]
        });

        this.onChanges();
    }

    onChanges(): void {
        this.filterForm.get('filterAuthor').valueChanges
        .subscribe(val => {
            val === true ? this.list = true : this.list = false;
            this.resetList();
            this.getContent(0, 'filtered');
        });

        this.filterForm.get('searchValue').valueChanges
        .subscribe((value) => {
            this.filter_value = value;
            if (this.list === false) {
                if (this.filterForm.get('condition').value === 'Title') {
                    this.newsService.getAllNews()
                    .subscribe((r_news: RecievedNews[]) => {
                        this.recieved_news = r_news.filter(val => val.title.includes(this.filter_value));
                    });
                } else if (this.filterForm.get('condition').value === 'User') {
                    this.newsService.getAllNews()
                    .subscribe((r_news: RecievedNews[]) => {
                        this.recieved_news = r_news.filter(val => val.lastname.includes(this.filter_value));
                    });
                }
            } else if (this.list === true) {
                if (this.filterForm.get('condition').value === 'Title') {
                    this.newsService.getAllNews()
                    .subscribe((r_news: RecievedNews[]) => {
                        this.filtered_news = r_news.filter(val => val.title.includes(this.filter_value));
                    });
                } else if (this.filterForm.get('condition').value === 'User') {
                    this.newsService.getAllNews()
                    .subscribe((r_news: RecievedNews[]) => {
                        this.filtered_news = r_news.filter(val => val.lastname.includes(this.filter_value));
                    });
                }
            }
        });
    }

    passValues() {
        this.confrimService.changeWindowValues({
            message: 'Are you sure you want to delete this news?',
            buttonValue: 'Delete'
        });
    }

    resetList() {
        this.activeGroups = [];
        this.activeNews = [];
        this.active_index = undefined;
    }

    clearSearch() {
        this.filterForm.get('searchValue').setValue('');
    }

    getContent(i: number, type: string) {
        if (i === this.active_index) {
            this.resetList();
        } else {
            if (type === 'full') {
                this.activeNews = this.recieved_news[i];
                this.active_index = i;
            } else if (type === 'filtered') {
                this.activeNews = this.filtered_news[i];
                this.active_index = i;
                this.activeGroups = this.groups.filter(val => val.news_id === this.filtered_news[i].id);
            }
        }
    }

    getGroups() {
        this.newsService.getSentGroups()
        .subscribe((groups) => {
            this.groups = groups;
        });
    }

    getNews() {
        this.newsService.getAllNews()
        .subscribe((news: RecievedNews[]) => {
            this.recieved_news = news;
            this.userService.getCurrentUser()
                .subscribe((user: User) => {
                this.currentUser = user['id'];
                this.filtered_news = this.recieved_news.filter(val => val.author === this.currentUser);
                this.getContent(0, 'full');
            });
        });
    }

    async deleteNews(id: number) {
        this.confrimService.changeWindowState('opened');
        await this.confrimService.confirmation().then(() => {
            this.newsService.deleteNews(id)
            .subscribe(() => {
                this.getNews();
            }, (err) => console.log(err));
        }).catch(() => {
            console.log('Activity cancelled');
        });
    }
}
