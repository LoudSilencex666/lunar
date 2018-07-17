import { NgModule } from '@angular/core';

import { /*FormsModule,*/ ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent, HeaderComponent, FooterComponent } from './layout';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        ReactiveFormsModule,
        HttpClientModule
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
        HttpClientModule
        // FormsModule
    ]
})

export class SharedModule {}
