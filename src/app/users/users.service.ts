import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
    constructor(private http: HttpClient) {}

    addUser() {
        this.http.post('http://localhost:3000/register', {login: 'oXvAsm45', password: 123}).subscribe(
        (data: any[]) => {
            console.log(data);
        });
        console.log('works');
    }
}
