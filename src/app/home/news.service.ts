import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class NewsServcie {
    constructor(private http: HttpClient) {}

    getNews() {
        return this.http.get('http://localhost:3000/news');
    }
}
