import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../../../../services/api.service";
import {apiRouters} from "../../../../core/config/apiRouters";
import {HelperService} from "../../../../services/helper.service";

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrl: './list-comments.component.scss'
})




export class ListCommentsComponent  implements  OnInit{
  comments : Array<any> = [];
  @Input()id : any;

  constructor(public api: ApiService,public helperService : HelperService) {
  }
  ngOnInit(): void {
     this.getComments()
  }

  getComments():void{
    this.api.getPro(apiRouters.POSTS+'/'+this.id + apiRouters.COMMENTS).then(resp=>{
      this.comments = resp;
    }).catch(err=>{
      this.helperService.alert('ERROR' , 'Hubo un error' , 'error')
    });
  }



}
