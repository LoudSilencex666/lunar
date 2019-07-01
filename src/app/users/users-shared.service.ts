import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { User } from '../core';

@Injectable()
export class UserManagementService {

    private userSource = new Subject<string>();
    private selectedUserSource = new Subject<User>();

    userChanged = this.userSource.asObservable();
    userSelected = this.selectedUserSource.asObservable();

    changeInTheUser() {
        this.userSource.next();
    }

    selectUser(user) {
        console.log(user);
        this.selectedUserSource.next(user);
    }

}
