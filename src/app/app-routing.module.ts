import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [

    /*{
      path: 'news',
      loadChildren: './settings/settings.module#SettingsModule'
    },
    {
      path: 'profile',
      loadChildren: './profile/profile.module#ProfileModule'
    },
    {
      path: 'groups',
      loadChildren: './editor/editor.module#EditorModule'
    },
    {
      path: 'stats',
      loadChildren: './article/article.module#ArticleModule'
    },
    {
      path: 'subjects',
      loadChildren: './article/article.module#ArticleModule'
    },
    {
      path: 'users',
      loadChildren: './article/article.module#ArticleModule'
    }*/

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
      // preload all modules; optionally we could
      // implement a custom preloading strategy for just some
      // of the modules (PRs welcome 😉)
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})

export class AppRoutingModule {}


