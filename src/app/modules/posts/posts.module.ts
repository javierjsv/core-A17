import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import {NgxSpinnerModule} from "ngx-spinner";
import {ListPostsComponent} from "./components/list-posts/list-posts.component";
import {MaterialModule} from "../material/material.module";
import {TranslateModule} from "@ngx-translate/core";
import {CommentModule} from "../comments/comment/comment.module";
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [ListPostsComponent],
    imports: [
        CommonModule,
        PostsRoutingModule,
        NgxSpinnerModule,
        MaterialModule,
        TranslateModule,
        CommentModule,
        ComponentsModule
    ],
  exports:[
    CommonModule,
    NgxSpinnerModule,
    MaterialModule
  ]
})
export class PostsModule { }
