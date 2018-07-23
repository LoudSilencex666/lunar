import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService, AuthModel } from '../core';

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
}
