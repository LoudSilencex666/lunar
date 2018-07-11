import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})

export class AuthComponent {
    authForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.authForm = this.fb.group({
            username : ['', Validators.required],
            password : ['', Validators.required]
        });
    }
}
