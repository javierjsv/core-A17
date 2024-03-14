import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrl: './back.component.scss'
})
export class BackComponent {
  @Input() rute = '';

  constructor(public router : Router) {
  }
  back():void{
    this.router.navigateByUrl(this.rute);
  }
}
