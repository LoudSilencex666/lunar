import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { ApiService, AuthModel } from '../core';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient,
        private apiService: ApiService
    ) {}

    sendLogin(authForm) {
        return this.apiService.post('/login', {user: authForm}).subscribe(
        (data: any[]) => {
            console.log(authForm);
            console.log(data);
        });
    }

    login(login:string, password:string ) {
        return this.http.post<AuthModel>('http://localhost:3000/login', {login, password})
            // this is just the HTTP call,
            // we still need to handle the reception of the token

    }

    // public isAuthenticated(): boolean {
    //     const token = localStorage.getItem('token');
    //     // Check whether the token is expired and return
    //     // true or false
    //     return !this.jwtHelper.isTokenExpired(token);
    // }
}
