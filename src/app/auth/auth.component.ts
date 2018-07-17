import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthModel } from '../core';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
})

export class AuthComponent {
    authForm: FormGroup;
    authModel = AuthModel;

    constructor(private fb: FormBuilder, private authService: AuthService) {
        this.createForm();
    }

    createForm() {
        this.authForm = this.fb.group({
            username : ['', Validators.required],
            password : ['', Validators.required]
        });
    }

    login(): void {
        this.authService.sendLogin();
    }
}
