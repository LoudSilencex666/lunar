import { Component, OnInit } from '@angular/core';

import { StatsService } from '../stats.service';


@Component({
    selector: 'app-home-marklist',
    templateUrl: './mark-list.component.html',
    styleUrls: ['./mark-list.component.css']
})

export class MarkListComponent implements OnInit {
constructor(private statsService: StatsService) {}

    ngOnInit() {
        this.statsService.sendId('1');
    }
}
