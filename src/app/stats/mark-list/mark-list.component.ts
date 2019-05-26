import { Component, OnInit } from '@angular/core';

import { StatsService, SubjectService } from '../../core';
import { Marks, Subjects } from '../../core';


@Component({
    selector: 'app-home-marklist',
    templateUrl: './mark-list.component.html',
    styleUrls: ['./mark-list.component.css']
})

export class MarkListComponent implements OnInit {
    marks: Marks[];
    subjects: Subjects[];

constructor(
    private statsService: StatsService,
    private subjectService: SubjectService) {}

    ngOnInit() {
        this.subjectService.getSubjects()
        .subscribe((data: Subjects[]) => {
            console.log(data);
            this.subjects = data;
        });

        this.statsService.sendId('75')
        .subscribe((message) => {
            console.log(message);
            this.statsService.getUserContent()
            .subscribe((data: Marks[]) => {
                console.log(data);
                this.marks = data;
            });
        });
    }
}
