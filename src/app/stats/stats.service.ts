import { Injectable } from '@angular/core';
import { ApiService } from '../core';

@Injectable()
export class StatsService {
    constructor(
        private apiService: ApiService
    ) {}

    sendId(id) {
        return this.apiService.post('/stats', {id: id})
        .subscribe();
    }
}
