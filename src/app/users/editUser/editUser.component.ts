import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from '../../core';
import { UsersService } from '../../core';

@Component({
    selector: 'app-edit-user',
    templateUrl: './editUser.component.html',
    styleUrls: ['./editUser.component.css']
})

export class EditUserComponent {
    editUserForm: FormGroup;

    constructor(private fb: FormBuilder,
                private usersService: UsersService,
                private router: Router) {

        this.createForm();
    }

    createForm() {
        this.editUserForm = this.fb.group({
            id : [null],
            name : ['', Validators.required],
            lastname : ['', Validators.required],
            login : ['', Validators.required],
            password : ['', Validators.required],
            last_online : [null],
            register_number : ['', Validators.required],
            group_id : ['', Validators.required],
            role : ['', Validators.required]
        });
    }


    editUser(): void {
        this.usersService.editUser(this.editUserForm.value);
    }
}
