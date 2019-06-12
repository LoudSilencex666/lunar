import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

@Injectable()
export class GroupsService {
    constructor(private apiSercive: ApiService) {}

    getGroups() {
        return this.apiSercive.get(`/groups`);
    }
}
