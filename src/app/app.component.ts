import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MaterialModule} from "./modules/material/material.module";
// import {TranslateModule, TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

/*  constructor(public translateService: TranslateService) {
    this.initApp()
  }*/

  initApp():void{
    /*const lang: any = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'es';
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);*/
  }
}
