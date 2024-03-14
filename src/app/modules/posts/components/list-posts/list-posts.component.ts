import { Component } from '@angular/core';
import {ApiService} from "../../../../services/api.service";
import {Router} from "@angular/router";
import {apiRouters} from "../../../../core/config/apiRouters";
import {HelperService} from "../../../../services/helper.service";


@Component({
  selector: 'app-list-posts',
  standalone: false,
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.scss'
})
export class ListPostsComponent {
  public post: Array<any>=[]
  type: string = 'ball-scale-multiple';
  constructor(public api: ApiService , public router : Router , public helperService : HelperService) {
  }
  ngOnInit(): void {
    this.getpost();
  }
  getpost(): void{
    this.helperService.spinnerShow();
    this.api.getObs(apiRouters.POSTS).subscribe({
      next:(resp)=>{
        this.post = resp
        this.helperService.spinnerHidde()
      },
      error:(err)=>{
        this.helperService.spinnerHidde()
        this.helperService.alert('ERROR' , 'Hubo un error' , 'error')
      }
    })
  }

  go(id: string): void{
    // this.router.navigateByUrl(`post/detail?id=${id}`);
    this.router.navigate(['post/detail'], { queryParams: { id } });
    // this.router.navigateByUrl(`post/detail/${id}`);

  }

}
