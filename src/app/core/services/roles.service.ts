import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class RolesService {

    rolesSet = ['user', 'admin' /* 'superadmin' */]; // TODO: may be keep it on env variable on backend?

    constructor() {}

    getRoles(): Observable<string[]> {
        return of(this.rolesSet);
    }

}
