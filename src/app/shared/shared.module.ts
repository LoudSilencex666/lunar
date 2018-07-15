import { NgModule } from '@angular/core';

import { /*FormsModule,*/ ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
    imports: [
        ReactiveFormsModule,
        // FormsModule
    ],
    declarations: [
    ],
    exports: [
        ReactiveFormsModule,
        // FormsModule
    ]
})

export class SharedModule {}
