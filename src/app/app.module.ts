import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared';
import { NewsModule } from './news/news.module';
import { ProfileModule } from './profile/profile.module';
import { GroupsModule } from './groups/groups.module';
import { StatsModule } from './stats/stats.module';
import { SubjectsModule } from './subjects/subjects.module';
import { UsersModule } from './users/users.module';


@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      AppRoutingModule,
      BrowserModule,
      BrowserAnimationsModule,
      AuthModule,
      HomeModule,
      SharedModule,
      NewsModule,
      ProfileModule,
      GroupsModule,
      StatsModule,
      SubjectsModule,
      UsersModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}
