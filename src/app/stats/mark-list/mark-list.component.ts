import { Component, OnInit } from '@angular/core';

import { StatsService } from '../stats.service';
import { Marks } from '../../core';


@Component({
    selector: 'app-home-marklist',
    templateUrl: './mark-list.component.html',
    styleUrls: ['./mark-list.component.css']
})

export class MarkListComponent implements OnInit {
    marks: Marks[];
constructor(private statsService: StatsService) {}

    ngOnInit() {
        this.statsService.sendId('75')
        .subscribe((message) => {
            console.log(message);
            this.statsService.getUserContent()
            .subscribe((data: Marks[]) => {
                this.marks = data;
            });
        });
    }
}
