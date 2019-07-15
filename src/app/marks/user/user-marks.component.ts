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
    avgs: Array<number> = [];
    proposed_terms: any = [];
    term_mark: any = [];
    proposed_final: any = [];
    final_mark: any = [];
    g_avg: number;
    details: any;
    state: string;

    constructor(
        private subjectService: SubjectService,
        private marksService: MarksService
        ) {}

    ngOnInit() {
        this.getMarks();
        this.state = 'closed';
    }

    getMarks() {
        this.marksService.getUserMarks()
        .subscribe((marks: Mark[]) => {
            this.marks = marks;
            this.subjectService.getSubjects()
                .subscribe((subjects: Subject[]) => {
                this.subjects = subjects;
                this.subjects.forEach((item) => {
                    this.filtered.push(this.marks
                        .filter(v => v.subject_id === item.id && v.type === 'normal')
                        .reverse());

                    this.proposed_terms.push(this.marks
                        .filter(v => v.subject_id === item.id && v.type === 'proposed_term')
                        .map(v => v.value));

                    this.term_mark.push(this.marks
                        .filter(v => v.subject_id === item.id && v.type === 'term')
                        .map(v => v.value));

                    this.proposed_final.push(this.marks
                        .filter(v => v.subject_id === item.id && v.type === 'proposed_final')
                        .map(v => v.value));

                    this.final_mark.push(this.marks
                        .filter(v => v.subject_id === item.id && v.type === 'final')
                        .map(v => v.value));
                });
                const values = this.filtered.map(s => s.map(v => v.value));
                const weights = this.filtered.map(s => s.map(v => v.weight));
                this.getAvgs(values, weights);
            });
        });
    }

    getAvgs(v: Array<Array<number>>, w: Array<Array<number>>) {
        const sumarr = [],
        w_sumarr = [];
        let sum = 0,
        w_sum = 0;
        for (let i = 0; i < v.length; i++) {
            for (let j = 0; j < v[i].length; j++) {
                sum += v[i][j] * w[i][j];
                w_sum += w[i][j];
            }
            sumarr.push(sum);
            w_sumarr.push(w_sum);
            w_sum = sum = 0;
            this.avgs.push(Math.round((sumarr[i] / w_sumarr[i]) * 100) / 100);
        }
    }

    showDetails(i: number, j: number, state: string) {
        this.state = state;
        console.log(this.state);
        this.details = {
            value: this.filtered[i][j].value,
            weight: this.filtered[i][j].weight,
            creation_date: this.filtered[i][j].creation_date,
            subject_name: this.subjects[i].name
        };
    }
}
