import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RecievedNews, SentNews } from '../models';

@Injectable({
    providedIn: 'root',
})
export class NewsServcie {
    constructor(private http: HttpClient) {}

    private _refreshNeeded$ = new Subject<void>();

    get refreshNeeded$() {
        return this._refreshNeeded$;
    }

    getAllNews(): Observable<RecievedNews[]> {
        return this.http.get<RecievedNews[]>(`${environment.api_url}/news/getAll`, {withCredentials: true});
    }

    getSentGroups() {
        return this.http.get(`${environment.api_url}/news/getSentGroups`, {withCredentials: true});
    }

    getUserNews(): Observable<RecievedNews[]> {
        return this.http.get<RecievedNews[]>(`${environment.api_url}/news/getNews`, {withCredentials: true});
    }

    getSliderNews(): Observable<RecievedNews[]> {
        return this.http.get<RecievedNews[]>(`${environment.api_url}/news/getSliderNews`, {withCredentials: true});
    }

    sendNews(news: SentNews) {
        return this.http.post<SentNews>(`${environment.api_url}/news`, {news}, {withCredentials: true})
        .pipe(
            tap(() => {
                this._refreshNeeded$.next();
            })
        );
    }

    deleteNews(id: number): Observable<void> {
        return this.http.delete<void>(`${environment.api_url}/news/delete/${id}`, {withCredentials: true})
        .pipe(
            tap(() => {
                this._refreshNeeded$.next();
            })
        );
    }
}
