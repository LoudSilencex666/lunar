import { Component, OnInit } from '@angular/core';

import { GroupsService, Group, SentNews, NewsServcie } from '../../core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, ValidatorFn } from '@angular/forms';


@Component({
    selector: 'app-news-newssend',
    templateUrl: './news-send.component.html',
    styleUrls: ['./news-send.component.css']
})

export class NewsSendComponent implements OnInit {
    newsForm: FormGroup;
    groups: Group[];
    sentNews: SentNews;

    constructor(
        private groupsService: GroupsService,
        private newsService: NewsServcie,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        const seletAllControl = new FormControl(false);

        this.newsForm = this.formBuilder.group({
            title: ['', [Validators.required]],
            content: ['', [Validators.required]],
            selectAll: seletAllControl,
            groups: new FormArray([], this.minSelected(1))
        });

        this.groupsService.getGroups()
        .subscribe((groups: Group[]) => {
            this.groups = groups;
            this.groups.map((g, i) => {
                const control = new FormControl;
                (this.newsForm.controls.groups as FormArray).push(control);
            });
        });

        this.onChanges();
    }

    onChanges(): void {
        this.newsForm.get('selectAll').valueChanges
        .subscribe(val => {
            this.newsForm.get('groups')
            .patchValue(Array(this.groups.length).fill(val), {emitEvent: false});
        });

        this.newsForm.get('groups').valueChanges
        .subscribe(val => {
            const allSelected = val.every(b => b);
            if (this.newsForm.get('selectAll').value !== allSelected) {
                this.newsForm.get('selectAll').patchValue(allSelected, {emitEvent: false});
            }
        });
    }

    minSelected(min: number) {
        const validator: ValidatorFn = (formArray: FormArray) => {
            const totalSelected = formArray.controls
            .map(control => control.value)
            .reduce((p, n) => n ? p + n : p, 0);
            return totalSelected >= min ? null : {required: true};
        };
        return validator;
    }

    reset() {
        this.newsForm.reset();
    }

    submit() {
        const selectedIds = this.newsForm.value.groups
        .map((v, i: number) => v ? this.groups[i].id : null)
        .filter(v => v !== null);
        for (let i = 0; i < selectedIds.length; i++) {
            selectedIds[i] = [selectedIds[i]];
        }

        this.sentNews = {
            title: this.newsForm.value.title,
            content: this.newsForm.value.content,
            groups_id: selectedIds
        };

        this.newsService.sendNews(this.sentNews)
        .subscribe((message) => {
            console.log(message);
            this.reset();
        });
    }
}
