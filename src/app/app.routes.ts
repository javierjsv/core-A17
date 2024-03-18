import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./modules/auth/login/login.component";
import {guardsGuard} from "./shared/auth-guard/guards.guard";

export const routes: Routes = [
  { path : '' , component :LoginComponent},
  { path : 'home' , component :HomeComponent , canActivate :[guardsGuard]},
  { path : 'post' , loadChildren:()=> import('./modules/posts/posts.module').then((module) => module.PostsModule)  , canActivate :[guardsGuard] },
  { path : 'auth' ,   loadChildren:()=> import('./modules/auth/auth.module').then((module)=> module.AuthModule) }
];
