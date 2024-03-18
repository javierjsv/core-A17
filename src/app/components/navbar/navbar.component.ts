import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {HelperService} from "../../services/helper.service";
import {GlobalText} from "../../core/config/globlasTexts";
import {MatSnackBar} from "@angular/material/snack-bar";
import {readableStreamLikeToAsyncGenerator} from "rxjs/internal/util/isReadableStreamLike";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  home: string = 'home';
  lang: any = 'es'
  globalText = GlobalText;
  constructor(public router: Router ,
              private translateService: TranslateService ,
              public helperService :HelperService,
              public _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
   if (this.helperService.getLocalSorage('lang') !== undefined){
     const traduction : string | undefined = this.helperService.getLocalSorage('lang')?.toString()
      this.lang = traduction;
   }

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
