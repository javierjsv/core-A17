import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {HelperService} from "../../services/helper.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  home: string = 'home';
  lang = 'es'
  constructor(public router: Router ,
              private translateService: TranslateService ,
              public helperService :HelperService) {
  }
  go():void{
    this.router.navigateByUrl('post')
  }

  change(): void{
    this.lang === 'es' ? this.lang = "en" : this.lang = "es";
    this.lang === 'es' ? this.translateService.use('es') : this.translateService.use('en');
    this.helperService.setLocalSorage('lang' , this.lang )
  }
}
