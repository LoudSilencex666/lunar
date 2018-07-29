import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StatsService {
    constructor(
        private http: HttpClient
    ) {}

    sendId(userid) {
        this.http.post<{message: string}>('http://localhost:3000/stats', {id: userid})
        .subscribe((data) => {
            console.log(userid);
            console.log(data.message);
        });
    }

    getUserContent() {
        return this.http.get('http://localhost:3000/stats');
    }
}
