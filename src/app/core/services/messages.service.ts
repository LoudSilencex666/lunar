import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Subject } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable()
export class MessagesService {
    constructor(private http: HttpClient) {}

    private _refreshNeeded$ = new Subject<void>();

    get refreshNeeded$() {
        return this._refreshNeeded$;
    }

    getRecievedMessages() {
        return this.http.get(`${environment.api_url}/messages/recieved`, {withCredentials: true});
    }

    getSentMessages() {
        return this.http.get(`${environment.api_url}/messages/sent`, {withCredentials: true});
    }

    sendMessage(message) {
        return this.http.post<{info: string}>(`${environment.api_url}/messages`, {message}, {withCredentials: true})
        .pipe(delay(1000),
            tap(() => {
                this._refreshNeeded$.next();
            })
        );
    }
}
