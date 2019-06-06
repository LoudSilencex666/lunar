import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class GroupsService {
    constructor(private http: HttpClient) {}

    getGroups() {
        return this.http.get(`${environment.api_url}/groups`, {withCredentials: true});
    }
}
