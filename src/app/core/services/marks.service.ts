import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class MarksService {
    constructor(private http: HttpClient) {}

    getUserMarks() {
        return this.http.get(`${environment.api_url}/marks`, {withCredentials: true});
    }
}
