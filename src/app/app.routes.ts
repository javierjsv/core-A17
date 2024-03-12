import { Routes } from '@angular/router';

export const routes: Routes = [
  { path : 'post' , loadChildren:()=> import('./modules/posts/posts.module').then((module) => module.PostsModule) }
];
