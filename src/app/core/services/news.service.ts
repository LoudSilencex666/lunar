import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { RecievedNews, SentNews } from '../models';

@Injectable({
    providedIn: 'root',
})
export class NewsServcie {
    constructor(private http: HttpClient) {}

    getAllNews(): Observable<RecievedNews[]> {
        return this.http.get<RecievedNews[]>(`${environment.api_url}/news/getAll`, {withCredentials: true});
    }

    getUserNews(): Observable<RecievedNews[]> {
        return this.http.get<RecievedNews[]>(`${environment.api_url}/news/getNews`, {withCredentials: true});
    }

    sendNews(news: SentNews) {
        return this.http.post<SentNews>(`${environment.api_url}/news`, {news}, {withCredentials: true});
    }

    deleteNews(id: number): Observable<void> {
        return this.http.delete<void>(`${environment.api_url}/news/delete/${id}`, {withCredentials: true});
    }
}
