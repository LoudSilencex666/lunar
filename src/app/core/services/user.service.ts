import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from './api.service';
import { environment } from '../../../environments/environment';

import { UserModel as User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    constructor(
        private http: HttpClient,
        private apiSercive: ApiService
        ) {}

    getUserData() {
        // let test = this.apiSercive.get(`/users`);
        // console.log(test);
        // return test;
    }

}
