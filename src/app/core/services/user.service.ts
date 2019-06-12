import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    constructor(
        private apiSercive: ApiService
        ) {}

    getCurrentUser(): Observable<User> {
        return this.apiSercive.get(`/users/getuser`);
    }

    getAllUsers(): Observable<User[]> {
        return this.apiSercive.get(`/users/getusers`);
    }

    addUser(addUserData): Observable<any> {
        return this.apiSercive.post(`/users/adduser`, {addUserData});
    }

    editUser(editUserData): Observable<any> {
        return this.apiSercive.post(`/users/edituser`, {editUserData});
    }

    deleteUser(deleteUserData): Observable<any> {
        return this.apiSercive.post(`/users/deleteuser`, {deleteUserData});
    }

}
