import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UserManagementService {

    // Observable string sources
    private userSource = new Subject<string>();

    // Observable string streams
    userChanged = this.userSource.asObservable();

    // Service message commands
    changeInTheUser() {
        this.userSource.next();
    }

}
