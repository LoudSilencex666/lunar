import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class UsersService {
    constructor(private http: HttpClient) {}

    getCurrentUser() {
        return this.http.get(`${environment.api_url}/users/getuser`, {withCredentials: true});
    }

    getUserList() {
        return this.http.get(`${environment.api_url}/users/getusers`, {withCredentials: true});
    }
}
