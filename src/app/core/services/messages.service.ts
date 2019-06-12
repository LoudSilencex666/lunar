import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RecievedMessage, SentMessage } from '../models';

@Injectable()
export class MessagesService {
    constructor(private http: HttpClient) {}

    private _refreshNeeded$ = new Subject<void>();

    get refreshNeeded$() {
        return this._refreshNeeded$;
    }

    getRecievedMessages(): Observable<RecievedMessage[]> {
        return this.http.get<RecievedMessage[]>(`${environment.api_url}/messages/recieved`, {withCredentials: true});
    }

    getSentMessages(): Observable<RecievedMessage[]> {
        return this.http.get<RecievedMessage[]>(`${environment.api_url}/messages/sent`, {withCredentials: true});
    }

    sendMessage(message: SentMessage) {
        return this.http.post<SentMessage>(`${environment.api_url}/messages`, {message}, {withCredentials: true})
        .pipe(
            tap(() => {
                this._refreshNeeded$.next();
            })
        );
    }

    deleteMessage(id: number) {
        return this.http.delete<{info: string}>(`${environment.api_url}/messages/delete/${id}`, {withCredentials: true})
        .pipe(
            tap(() => {
                this._refreshNeeded$.next();
            })
        );
    }
}
