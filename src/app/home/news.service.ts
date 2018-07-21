import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class NewsServcie {
    constructor(private http: HttpClient) {}

    getNewsTitle() {
        return this.http.get('http://localhost:3000/news');

    }
    getNewsContent() {
        this.http.post('http://localhost:3000/news/content', {id: '2'})
        .subscribe((data: any[]) => {
            console.log(data);
        });
    }
}
