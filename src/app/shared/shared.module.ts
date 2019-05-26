import { NgModule } from '@angular/core';

import { /*FormsModule,*/ ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent, HeaderComponent, FooterComponent } from './layout';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
        // FormsModule
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
        HttpClientModule
        // FormsModule
    ]
})

export class SharedModule {}
