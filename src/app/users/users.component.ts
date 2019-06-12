import { Component, OnInit } from '@angular/core';

import { UserService } from '../core';
import { GroupsService } from '../core';
import { Group } from '../core';
import { User } from '../core';
import { Observable, fromEventPattern, of } from 'rxjs';
import { filter, share, map } from 'rxjs/operators';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
    constructor(
        private userService: UserService,
        private groupsService: GroupsService
    ) {}

    users: Observable<User | User[]>;
    groups: Observable<Group | Group[]>;
    groupsArr: Group[];
    activeGroupId: number;

    ngOnInit() {
        this.groups = this.groupsService.getGroups().pipe(share());

        this.groups.subscribe( groups => {
            this.groupsArr = groups as Group[];
            this.activeGroupId = this.groupsArr[0].id;
            this.activeUsers();
        });

    }

    activeUsers() {
        this.users = this.userService.getAllUsers().pipe(
            map( users => users.filter(user => user.group_id === this.activeGroupId)),
            share()
        );
    }

    activeGroup(name) {
        this.groupsArr.forEach(group => {
            if( group.name == name) {
                this.activeGroupId = group.id;
            }
        });

        this.activeUsers();
        console.log(this.groupsArr);
        console.log(this.activeGroupId);
    }
}



