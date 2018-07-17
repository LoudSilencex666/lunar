import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}

    sendLogin() {
        this.http.get('http://localhost:3000/login'/*, {login: 'oXvAsm45', password: 123}*/).subscribe(
        (data: any[]) => {
            console.log(data);
        });
        console.log('works');
    }
}
