import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GroupsService {
    constructor(private http: HttpClient) {}

    getGroups() {
        return this.http.get('http://localhost:3000/groups');
    }
}
