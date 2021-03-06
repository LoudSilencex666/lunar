import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService, AuthModel } from '../core';
import { environment } from '../../environments/environment';


@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient,
        private apiService: ApiService,
    ) {}

    login(login: string, password: string) {
        return this.apiService.post(`/login`, {login, password});
    }
}
