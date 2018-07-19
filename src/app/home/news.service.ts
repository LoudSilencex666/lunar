import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class NewsServcie {
    constructor(private http: HttpClient) {}

    getNews() {
        this.http.get('http://localhost:3000/news')
        .subscribe((data: any[]) => {
            console.log(data);
        });
    }
}
