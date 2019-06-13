import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    constructor(
        private apiService: ApiService
        ) {}

    getCurrentUser(): Observable<User> {
        return this.apiService.get(`/users/getuser`);
    }

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
