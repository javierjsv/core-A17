import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import {NgxSpinnerModule} from "ngx-spinner";
import {ListPostsComponent} from "./components/list-posts/list-posts.component";
import {MaterialModule} from "../material/material.module";


@NgModule({
  declarations: [ListPostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    NgxSpinnerModule,
    MaterialModule
  ],
  exports:[
    CommonModule,
    NgxSpinnerModule,
    MaterialModule
  ]
})
export class PostsModule { }
