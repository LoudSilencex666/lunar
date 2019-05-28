import { Component, OnInit, ViewChild } from '@angular/core';

import { NewsServcie } from '../../core';
import { News } from '../../core';

@Component({
    selector: 'app-home-nbrowser',
    templateUrl: './nbrowser.component.html',
    styleUrls: ['./nbrowser.component.css']
})

export class NbrowserComponent implements OnInit {
    sliderNews: string[];
    currentTransform: number;

    constructor() {
        this.sliderNews = ['Twoja stara1', 'Twoja stara2', 'Twoja stara3'];
        this.currentTransform = 100;

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
