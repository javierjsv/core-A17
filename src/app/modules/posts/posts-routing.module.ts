import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPostsComponent} from "./components/list-posts/list-posts.component";
import {DetailPostComponent} from "./components/detail-post/detail-post.component";

const routes: Routes = [
  { path: '' , children : [
      { path :'' , component : ListPostsComponent },
      { path :'post-list' , component : ListPostsComponent },
      { path :'detail' , component : DetailPostComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
