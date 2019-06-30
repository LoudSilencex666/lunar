import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthModel } from '../core';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
})

export class AuthComponent {
    authForm: FormGroup;

    constructor(private fb: FormBuilder,
                private authService: AuthService,
                private router: Router) {

        this.createForm();
    }

    createForm() {
        this.authForm = this.fb.group({
            login : ['', Validators.required],
            password : ['', Validators.required]
        });
    }

    login() {
        const val = this.authForm.value;

        if (val.login && val.password) {
            this.authService.login(val.login, val.password)
                .subscribe(
                    () => {
                        console.log('User is logged in');
                        this.router.navigateByUrl('/');
                    }
                );
        }
    }
}
