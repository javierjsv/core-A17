import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {apiRouters} from "../../../../core/config/apiRouters";
import {ApiService} from "../../../../services/api.service";
import {HelperService} from "../../../../services/helper.service";

@Component({
  selector: 'app-detail-post',
  standalone: true,
  imports: [],
  templateUrl: './detail-post.component.html',
  styleUrl: './detail-post.component.scss'
})
export class DetailPostComponent {

  post = {} as any;
  constructor(public activatedRoute : ActivatedRoute ,
              public api : ApiService ,
              public helperService : HelperService) {
    activatedRoute.queryParams.subscribe({
      next:(resp : any)=>{
        console.log(resp)
        this.getDetail(resp.id)
      },
      error:(err)=>{
        // TODO devolver list post
      }
    })
  }
  getDetail(id: number):void{
    this.helperService.spinnerShow();
    this.api.getPro(apiRouters.POSTS + `/${id}`).then((resp: any)=>{
      console.log(resp)
      this.post = resp;
      this.helperService.spinnerHidde();
    }).catch(err=>{
      this.helperService.spinnerHidde();
      console.error(err)
    })
  }

}
