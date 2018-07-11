import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';

import { SharedModule } from "../shared";

@NgModule({
    imports: [
        AuthRoutingModule,
        SharedModule
    ],
    declarations: [
        AuthComponent
    ],
    providers: [
    ]
})

export class AuthModule {}