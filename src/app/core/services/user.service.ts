import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

import { User } from '../models/user.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class UserService {
    private currentUserSubject = new BehaviorSubject<User>({} as User);
    public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

    constructor(
        private apiService: ApiService
    ) {}

    populateUser() {
        this.apiService.get(`/users/getuser`).subscribe(
            userData => this.currentUserSubject.next(userData)
        );
    }

    getCurrentUser(): Observable<User> {
        return this.currentUser;
    }

    updateLoggedUser(user): Observable<User> {
        /* To do: user update */
        return user;
    }

}
