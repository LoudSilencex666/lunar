import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from '../../core';
import { UserService } from '../../core';

@Component({
    selector: 'app-add-user',
    templateUrl: './addUser.component.html',
    styleUrls: ['./addUser.component.css']
})

export class AddUserComponent {
    addUserForm: FormGroup;

    constructor(private fb: FormBuilder,
                private userService: UserService,
                private router: Router) {

        this.createForm();
    }

    createForm() {
        this.addUserForm = this.fb.group({
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


    addUser(): void {
        this.userService.addUser(this.addUserForm.value);
    }
}
