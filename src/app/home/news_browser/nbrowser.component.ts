import { Component, OnInit } from '@angular/core';

import { RecievedNews, NewsServcie } from '../../core';

@Component({
    selector: 'app-home-nbrowser',
    templateUrl: './nbrowser.component.html',
    styleUrls: ['./nbrowser.component.css']
})

export class NbrowserComponent implements OnInit {
    sliderNews: RecievedNews[];
    sliderControlInactiveSrc: string;
    sliderControlActiveSrc: string;
    sliderControlSrc: string;
    currentTransform: number;

    constructor(private newsService: NewsServcie) {
        this.currentTransform = 0;
        this.sliderControlInactiveSrc = '/assets/images/slider/inactive.png';
        this.sliderControlActiveSrc = '/assets/images/slider/active.png';
    }

    ngOnInit() {
        this.getNews();
    }

    getNews() {
        this.newsService.getSliderNews()
        .subscribe((news: RecievedNews[]) => {
            this.sliderNews = news;
        });
    }

    settingSlide() {
        const styles = {
            'transform': 'translateX(-' + this.currentTransform + '%)',
        };
        return styles;
    }

    changeSlide(x) {
        this.currentTransform = 100 * x;
    }

}
