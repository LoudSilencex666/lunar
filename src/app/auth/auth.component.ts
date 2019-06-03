import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

    constructor(private fb: FormBuilder,
                private authService: AuthService,
                private router: Router) {

        this.createForm();
    }

    ngOnInit() {

    }

    createForm() {
        this.authForm = this.fb.group({
            login : ['', Validators.required],
            password : ['', Validators.required]
        });
    }

    login() {
        console.log(this.authForm.value);
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
