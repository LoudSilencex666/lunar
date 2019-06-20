import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { ConfirmService } from '../../../core';
import { trigger, transition, style, animate} from '@angular/animations';

@Component({
    selector: 'app-layout-confirm',
    templateUrl: './confirm-popup.component.html',
    styleUrls: ['./confirm-popup.component.css'],
    animations: [
        trigger('fade', [
            transition(':enter', [
                style({opacity: 0}),
                animate('500ms', style({opacity: 1}))
            ]),
            transition(':leave', [
                animate('500ms', style({ opacity: 0 }))
              ])
        ])
    ]
})

export class ConfirmPopupComponent implements OnInit {

    windowValues: any;

    constructor(
        private confirmService: ConfirmService
    ) {}

    @HostBinding('@fade')

    @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
        this.confirmService.changeWindowState('closed');
    }

    @HostListener('document:click', ['$event']) onClickHandler(event: MouseEvent) {
        event.stopPropagation();
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
