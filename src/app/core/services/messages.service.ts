import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessagesService {
    constructor(private http: HttpClient) {}

    sendId(userid) {
        return this.http.post<{info: string}>('http://localhost:3000/messages', {id: userid});
    }

    getMessages() {
        return this.http.get('http://localhost:3000/messages');
    }

    sendMessage(message) {
        return this.http.post<{info: string}>('http://localhost:3000/messages/send', {message});
    }
}
