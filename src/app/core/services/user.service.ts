import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from './api.service';

import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    constructor(
        private http: HttpClient,
        private apiSercive: ApiService
        ) {}

    getCurrentUser(): Observable<User> {
        return this.apiSercive.get(`/users/getuser`);
    }

    getAllUsers(): Observable<User[]> {
        return this.apiSercive.get(`/users/getusers`);
    }

}
