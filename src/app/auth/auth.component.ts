import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthModel } from '../core';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
})

export class AuthComponent implements OnInit {
    authForm: FormGroup;
    authModel = AuthModel;

    constructor(private fb: FormBuilder, private authService: AuthService) {
        this.createForm();
    }

    ngOnInit() {
        console.log(this.authForm.value);
    }

    createForm() {
        this.authForm = this.fb.group({
            username : ['', Validators.required],
            password : ['', Validators.required]
        });
    }

    login() {
        console.log(this.authForm.value);
        this.authService.sendLogin(this.authForm.value);
    }
}
