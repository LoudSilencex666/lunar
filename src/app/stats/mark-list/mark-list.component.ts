import { Component, OnInit } from '@angular/core';

import { StatsService, SubjectService } from '../../core';
import { Mark, Subject } from '../../core';


@Component({
    selector: 'app-stats-marklist',
    templateUrl: './mark-list.component.html',
    styleUrls: ['./mark-list.component.css']
})

export class MarkListComponent implements OnInit {
    marks: Mark[];
    subjects: Subject[];

constructor(
    private statsService: StatsService,
    private subjectService: SubjectService) {}

    ngOnInit() {
        this.subjectService.getSubjects()
        .subscribe((data: Subject[]) => {
            console.log(data);
            this.subjects = data;
        });

        this.statsService.getUserContent()
        .subscribe((data: Mark[]) => {
            console.log(data);
            this.marks = data;
            });
    }
}
