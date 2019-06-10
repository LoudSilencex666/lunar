import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from '../../core/models/user.model';
import { UsersService } from '../users.service';

@Component({
    selector: 'app-add-user',
    templateUrl: './addUser.component.html',
    styleUrls: ['./addUser.component.css']
})

export class AddUserComponent {
    addUserForm: FormGroup;
    authModel: User[];

    constructor(private fb: FormBuilder, private userService: UsersService) {
        this.createForm();
    }

    createForm() {
        this.addUserForm = this.fb.group({
            username : ['', Validators.required],
            password : ['', Validators.required]
        });
    }

    login(): void {
        this.userService.addUser();
    }
}
