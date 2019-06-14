import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ConfirmService {

    promiseResolve: any;
    promiseReject: any;
    state: string;

    private windowValues = new BehaviorSubject<any>({
        message: '',
        buttonValue: ''
    });

    currnetWindow = this.windowValues.asObservable();



    private windowState = new BehaviorSubject<string>('closed');

    currentWindowState =  this.windowState.asObservable();



    constructor() { }



    changeWindowValues(values) {
        this.windowValues.next(values);
    }

    changeWindowState(state) {
        this.windowState.next(state);
    }

    confirmation() {
        return new Promise((resolve, reject) => {
            this.promiseResolve = resolve;
            this.promiseReject = reject;
        });
    }
}
