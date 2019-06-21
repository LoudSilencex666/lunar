import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GroupsService {
    constructor(
        private apiSercive: ApiService,
        private http: HttpClient) {}

    getGroups() {
        return this.apiSercive.get(`/groups`);
    }
}
