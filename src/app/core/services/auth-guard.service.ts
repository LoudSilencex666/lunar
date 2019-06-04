import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router: Router, private cookieService: CookieService) {}

    isAuthenticated(): boolean {
        if (this.cookieService.check(environment.cookieSession)) {
            const sessionCookie = this.cookieService.get(environment.cookieSession);
            return true;
        } else {
            console.log('session cookie does not exist');
            return false;
        }
    }

    canActivate(): boolean {
        if (!this.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }

        return true;
    }
}
