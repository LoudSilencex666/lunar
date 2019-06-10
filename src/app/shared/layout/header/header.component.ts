import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../core';
import { Users as User } from '../../../core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';


@Component({
    selector: 'app-layout-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    constructor(
        private userService: UserService
    ) {}

    userData: Observable<User>;

    ngOnInit() {
        this.userData = this.userService.getUserData().pipe(share());
    }
}
