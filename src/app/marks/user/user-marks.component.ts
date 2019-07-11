import { Component, OnInit } from '@angular/core';
import { SubjectService, MarksService, Subject, Mark } from 'src/app/core';

@Component({
    selector: 'app-marks-user',
    templateUrl: './user-marks.component.html',
    styleUrls: ['./user-marks.component.css']
})

export class UserMarksComponent implements OnInit {

    subjects: Subject[];
    marks: Mark[];
    filtered: Array<Mark[]> = [];
    avg: Array<number> = [];

    constructor(
        private subjectService: SubjectService,
        private marksService: MarksService
        ) {}

    ngOnInit() {
        this.getMarks();
    }

    getMarks() {
        this.marksService.getUserMarks()
        .subscribe((marks: Mark[]) => {
            this.marks = marks;
            this.subjectService.getSubjects()
                .subscribe((subjects: Subject[]) => {
                this.subjects = subjects;
                this.subjects.forEach((item) => {
                    this.filtered.push(this.marks.filter(v => v.subject_id === item.id));
                });
                const values = this.filtered.map(s => s.map(v => v.value));
                const weights = this.filtered.map(s => s.map(v => v.weight));
                this.getAvg(values, weights);
            });
        });
    }

    getAvg(v: Array<Array<number>>, w: Array<Array<number>>) {
        const sumarr = [];
        const w_sumarr = [];
        let sum = 0;
        let w_sum = 0;
        for (let i = 0; i < v.length; i++) {
            for (let j = 0; j < v[i].length; j++) {
                sum += v[i][j] * w[i][j];
                w_sum += w[i][j];
            }
            sumarr.push(sum);
            w_sumarr.push(w_sum);
            w_sum = 0;
            sum = 0;
            this.avg.push(sumarr[i] / w_sumarr[i]);
        }
        console.log(this.avg);
    }
}
