import { Component, OnInit } from '@angular/core';
import { trigger, query, state, style, animate, transition} from '@angular/animations';

import { UserService } from '../../../core';
import { User } from '../../../core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';


@Component({
    selector: 'app-layout-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    animations: [
        trigger('sidebarState', [
            state('inactive', style({
                width: '90px'
            })),
            state('active', style({
                width: '500px'
            })),
            transition('inactive => active', animate('300ms ease-in')),
            transition('active => inactive', animate('300ms ease-out'))
        ])
    ]
})

export class SidebarComponent implements OnInit{
    constructor(
        private userService: UserService
    ) {}

    active: Boolean = false;
    userData: Observable<User>;
    userRole: boolean;

    ngOnInit() {
        this.userData = this.userService.getCurrentUser().pipe(share());
        this.userData.subscribe(user => {
            if ( user.role !== 'user' ) {
                this.userRole = true;
            } else {
                this.userRole = false;
            }
        });

    }

    get sidebarState() {
        return this.active ? 'active' : 'inactive';
    }

    toggle() {
        this.active = !this.active;
    }
}



