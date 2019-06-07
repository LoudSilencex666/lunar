import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { UserService } from '../core/services/user.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    constructor(
        private http: HttpClient,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.userService.getUserData().subscribe((data) => {
            console.log(data)
        });
        // To jeszcze nie działa
    }
}
