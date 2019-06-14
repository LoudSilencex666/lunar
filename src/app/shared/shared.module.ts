import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SidebarComponent, HeaderComponent, FooterComponent, ConfirmPopupComponent } from './layout';

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
        FooterComponent,
        ConfirmPopupComponent
    ],
    exports: [
        ReactiveFormsModule,
        SidebarComponent,
        HeaderComponent,
        FooterComponent,
        HttpClientModule,
        FormsModule,
        ConfirmPopupComponent
    ]
})

export class SharedModule {}
