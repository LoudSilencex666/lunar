import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { UserManagementService } from '../users-shared.service';
import { UserService } from '../../core';
import { RolesService } from '../../core';
import { GroupsService } from '../../core';

import { Group } from '../../core';
import { User } from '../../core';

@Component({
    selector: 'app-add-user',
    templateUrl: './addUser.component.html',
    styleUrls: ['./addUser.component.css']
})

export class AddUserComponent implements OnInit {
    addUserForm: FormGroup;
    groups: Observable<Group | Group[]>;
    roles: Observable<string[]>;

    constructor(private fb: FormBuilder,
                private userService: UserService,
                private rolesService: RolesService,
                private groupsService: GroupsService,
                private userMngService: UserManagementService
    ) {
        this.createForm();

    }

    ngOnInit() {
        this.groups = this.groupsService.getGroups().pipe(share());
        this.roles = this.rolesService.getRoles().pipe(share());
    }

    createForm() {
        this.addUserForm = this.fb.group({
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


    addUser() {
        this.userService.addUser(this.addUserForm.value)
        .subscribe( message => {
            console.log(message);
            this.userMngService.changeInTheUser();
        });
    }
}
