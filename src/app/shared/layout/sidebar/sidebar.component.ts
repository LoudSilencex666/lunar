import { Component } from '@angular/core';
import {trigger, query, state, style, animate, transition} from '@angular/animations';

@Component({
    selector: 'app-layout-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    animations: [
        trigger('sidebarState', [
            state('inactive', style({
                width: '90px'
            })),
            state('active', style({
                width: '500px'
            })),
            transition('inactive => active', animate('300ms ease-in')),
            transition('active => inactive', animate('300ms ease-out'))
        ])
    ]
})

export class SidebarComponent {
    active = false;

    get sidebarState() {
        return this.active ? 'active' : 'inactive';
    }

    toggle() {
        this.active = !this.active;
    }
}



