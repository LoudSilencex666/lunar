import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from "./shared";


@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      AppRoutingModule,
      BrowserModule,

      AuthModule,
      HomeModule,
      SharedModule,
      
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}
