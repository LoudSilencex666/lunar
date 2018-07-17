import { ModuleWithProviders, NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared';
import { AuthService } from './auth.service';

@NgModule({
    imports: [
        AuthRoutingModule,
        SharedModule
    ],
    declarations: [
        AuthComponent
    ],
    providers: [
        AuthService
    ]
})

export class AuthModule {}
