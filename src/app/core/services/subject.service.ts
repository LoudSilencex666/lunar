import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class SubjectService {
    constructor(private http: HttpClient) {}

    getSubjects() {
        return this.http.get(`${environment.api_url}/subjects`, {withCredentials: true});
    }
}
