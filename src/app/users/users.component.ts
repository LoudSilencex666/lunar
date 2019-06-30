import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { share, map } from 'rxjs/operators';

import { UsersService } from '../core';
import { GroupsService } from '../core';
import { UserManagementService } from './users-shared.service';

import { Group } from '../core';
import { User } from '../core';



@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
    constructor(
        private usersService: UsersService,
        private groupsService: GroupsService,
        private userMngService: UserManagementService
    ) {
        this.userMngService.userChanged.subscribe(
            () => {
                this.activeUsers();
            }
        )
    }

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
        this.users = this.usersService.getAllUsers().pipe(
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
    }
}



