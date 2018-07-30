import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StatsService {
    constructor(private http: HttpClient) {}

    sendId(userid) {
        return this.http.post<{message: string}>('http://localhost:3000/stats', {id: userid});
    }

    getUserContent() {
        return this.http.get('http://localhost:3000/stats');
    }
}
