import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SidebarComponent, HeaderComponent, FooterComponent } from './layout';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        SidebarComponent,
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        ReactiveFormsModule,
        SidebarComponent,
        HeaderComponent,
        FooterComponent,
        HttpClientModule,
        FormsModule
    ]
})

export class SharedModule {}
