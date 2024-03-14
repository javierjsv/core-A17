import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {apiRouters} from "../../../../core/config/apiRouters";
import {ApiService} from "../../../../services/api.service";
import {HelperService} from "../../../../services/helper.service";
import {MatIcon} from "@angular/material/icon";
import {Location, TitleCasePipe} from "@angular/common";
import {CommentModule} from "../../../comments/comment/comment.module";
import {TranslateModule} from "@ngx-translate/core";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {NgxSpinnerModule} from "ngx-spinner";
import {ComponentsModule} from "../../../../components/components.module";

@Component({
  selector: 'app-detail-post',
  standalone: true,
  imports: [
    MatIcon,
    CommentModule,
    TranslateModule,
    MatProgressSpinner,
    NgxSpinnerModule,
    ComponentsModule,
    TitleCasePipe
  ],
  templateUrl: './detail-post.component.html',
  styleUrl: './detail-post.component.scss'
})
export class DetailPostComponent implements OnInit{

  idPost : any;
  post = {} as any;
  ruta = 'post';
  constructor(public activatedRoute : ActivatedRoute ,
              public api : ApiService ,
              public helperService : HelperService ,
              public router : Router,
              public location : Location
              ) {
    activatedRoute.queryParams.subscribe({
      next:(resp : any)=>{

        this.idPost = resp.id;
      },
      error:(err)=>{
        this.location.back();
        // this.router.navigateByUrl('post');
      }
    })
  }

  ngOnInit(): void {
    this.getDetail(this.idPost);
    }
  getDetail(id: number):void{
    this.helperService.spinnerShow();
    this.api.getPro(apiRouters.POSTS + `/${id}`).then((resp: any)=>{
      this.post = resp;
      this.helperService.spinnerHidde();
    }).catch(err=>{
      this.helperService.spinnerHidde();
      this.helperService.alert('ERROR' , 'Hubo un error' , 'error')
    })
  }

}
