import { Component, OnInit, ViewChild } from '@angular/core';

import { NewsServcie } from '../../core';
import { RecievedNews } from '../../core';

@Component({
    selector: 'app-home-nbrowser',
    templateUrl: './nbrowser.component.html',
    styleUrls: ['./nbrowser.component.css']
})

export class NbrowserComponent implements OnInit {
    sliderNews: string[];
    sliderControlInactiveSrc: string;
    sliderControlActiveSrc: string;
    sliderControlSrc: string;
    currentTransform: number;

    constructor() {
        this.sliderNews = ['Title1', 'Title2', 'Title3'];
        this.currentTransform = 0;
        this.sliderControlInactiveSrc = '/assets/images/slider/inactive.png';
        this.sliderControlActiveSrc = '/assets/images/slider/active.png';
    }

    ngOnInit() {

    }

    settingSlide() {
        const styles = {
            'transform': 'translateX(-' + this.currentTransform + '%)',
        }

        return styles;
    }

    changeSlide(x) {
        this.currentTransform = 100 * x;
    }

}
