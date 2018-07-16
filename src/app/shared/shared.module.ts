import { NgModule } from '@angular/core';

import { /*FormsModule,*/ ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent, HeaderComponent, FooterComponent } from './layout';


@NgModule({
    imports: [
        ReactiveFormsModule,
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
        HeaderComponent
        // FormsModule
    ]
})

export class SharedModule {}
