import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared';

import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { NewsModule } from './news/news.module';
import { ProfileModule } from './profile/profile.module';
import { GroupsModule } from './groups/groups.module';
import { StatsModule } from './stats/stats.module';
import { SubjectsModule } from './subjects/subjects.module';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';
import { MarksModule } from './marks/marks.module';



@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      AppRoutingModule,
      BrowserAnimationsModule,
      BrowserModule,
      CoreModule,
      SharedModule,


      AuthModule,
      HomeModule,
      NewsModule,
      MessagesModule,
      ProfileModule,
      GroupsModule,
      StatsModule,
      SubjectsModule,
      UsersModule,
      MarksModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}
