import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
  { path :'' , component :HomeComponent},
  { path : 'post' , loadChildren:()=> import('./modules/posts/posts.module').then((module) => module.PostsModule) }
];
