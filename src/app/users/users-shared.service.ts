import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UserManagementService {

    // Observable string sources
    private addingUserSource = new Subject<string>();

    // Observable string streams
    userAdded = this.addingUserSource.asObservable();

    // Service message commands
    addingUser() {
        this.addingUserSource.next();
    }

}
