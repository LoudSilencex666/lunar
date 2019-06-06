import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class StatsService {
    constructor(private http: HttpClient) {}

    getUserContent() {
        return this.http.get(`${environment.api_url}/stats`, {withCredentials: true});
    }
}
