import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class MessagesService {
    constructor(private http: HttpClient) {}

    getMessages() {
        return this.http.get(`${environment.api_url}/messages`, {withCredentials: true});
    }

    sendMessage(message) {
        return this.http.post<{info: string}>(`${environment.api_url}/messages`, {message}, {withCredentials: true});
    }
}
