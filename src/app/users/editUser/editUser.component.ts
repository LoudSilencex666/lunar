import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { RolesService } from '../../core';
import { GroupsService } from '../../core';
import { UsersService } from '../../core';
import { UserManagementService } from '../users-shared.service';

import { User } from '../../core';
import { Group } from '../../core';

@Component({
    selector: 'app-edit-user',
    templateUrl: './editUser.component.html',
    styleUrls: ['./editUser.component.css']
})

export class EditUserComponent implements OnInit {
    editUserForm: FormGroup;
    selectedUser: User;
    groups: Observable<Group | Group[]>;
    roles: Observable<string[]>;

    constructor(private fb: FormBuilder,
                private usersService: UsersService,
                private rolesService: RolesService,
                private groupsService: GroupsService,
                private userMngService: UserManagementService) {

        this.createForm();
        this.userMngService.userSelected.subscribe(
            (user) => {
                this.selectedUser = user;
            }
        )
    }

    ngOnInit() {
        this.groups = this.groupsService.getGroups().pipe(share());
        this.roles = this.rolesService.getRoles().pipe(share());
        // this.selectedUser = this.userMngService.userSelected.pipe(share()) as unknown as User;
    }

    createForm() {
        this.editUserForm = this.fb.group({
            id : [null],
            name : ['', Validators.required],
            lastname : ['', Validators.required],
            login : ['', Validators.required],
            password : ['', Validators.required],
            // last_online : [''],
            register_number : ['', Validators.required],
            group_id : ['', Validators.required],
            role : ['', Validators.required]
        });
    }

    editUser(): void {
        this.usersService.editUser(this.editUserForm.value).subscribe( message => {
            console.log(message);
        });
    }
}
