import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SubjectService {
    constructor(private http: HttpClient) {}

    getSubjects() {
        return this.http.get('http://localhost:3000/subjects');
    }
}
