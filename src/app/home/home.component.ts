import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {

    constructor(
        private http: HttpClient
    ) {}

    testquery() {
        return this.http.get(`${environment.api_url}/test`, {withCredentials: true});
    }

    test() {
        this.testquery()
            .subscribe(
                (data) => {
                    console.log(data);
                }
            );
    }
}
