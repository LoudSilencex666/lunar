import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
    constructor(
        private apiService: ApiService
        ) {}

    getAllUsers(): Observable<User[]> {
        return this.apiService.get(`/users/getusers`);
    }

    addUser(addUserData: Object): Observable<any> {
        return this.apiService.post(`/users/adduser`, addUserData);
    }

    editUser(editUserData: Object): Observable<any> {
        return this.apiService.post(`/users/edituser`, editUserData);
    }

    deleteUser(deleteUserData: Object): Observable<any> {
        return this.apiService.post(`/users/deleteuser`, deleteUserData);
    }

}
