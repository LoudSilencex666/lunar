import { Component, OnInit, HostListener } from '@angular/core';
import { ConfirmService } from '../../../core';
import { trigger, state, transition, style, animate} from '@angular/animations';

@Component({
    selector: 'app-layout-confirm',
    templateUrl: './confirm-popup.component.html',
    styleUrls: ['./confirm-popup.component.css'],
    animations: [
        trigger('fade', [
            state('void', style({opacity: 0})),

            transition('void => *', [
                animate(2000)
            ]),
            transition('* => void', [
                animate(2000)
            ])
        ])
    ]
})

export class ConfirmPopupComponent implements OnInit {

    windowValues: any;

    constructor(
        private confirmService: ConfirmService
    ) {}

    @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
        this.confirmService.changeWindowState('closed');
    }

    ngOnInit() {
        this.confirmService.currnetWindow
        .subscribe((value: any) => {
            this.windowValues = value;
            console.log(this.windowValues);
        });

    }

    private isConfirmed(status: boolean) {
        if (status === true) {
            this.confirmService.promiseResolve();
            this.confirmService.changeWindowState('closed');
        } else if (status === false) {
            this.confirmService.promiseReject();
            this.confirmService.changeWindowState('closed');
        }
    }
}
