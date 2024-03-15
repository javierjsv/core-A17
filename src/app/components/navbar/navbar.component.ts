import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {HelperService} from "../../services/helper.service";
import {GlobalText} from "../../core/config/globlasTexts";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  home: string = 'home';
  lang: string = 'es'
  globalText = GlobalText;
  constructor(public router: Router ,
              private translateService: TranslateService ,
              public helperService :HelperService,
              public _snackBar: MatSnackBar) {
  }
  go():void{
    this.router.navigateByUrl('post')
  }

  change(): void{
    this.lang === 'es' ? this.lang = "en" : this.lang = "es";
    this.lang === 'es' ? this.translateService.use('es') : this.translateService.use('en');
    this.helperService.setLocalSorage('lang' , this.lang )
    this._snackBar.open(this.lang === 'es' ?  this.translateService.instant('SPANISH') :  this.translateService.instant('ENGLISH'), "OK" ,{
      duration: 3000, horizontalPosition:"right"
    });
  }
}
