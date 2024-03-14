import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MaterialModule} from "./modules/material/material.module";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {NgxSpinnerModule} from "ngx-spinner";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MaterialModule, TranslateModule, NgxSpinnerModule,
  ],
  providers :[TranslateService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private translateService: TranslateService,
              ) {
      this.initApp()
}
   initApp():void{
      const lang: any = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'es';
      this.translateService.setDefaultLang(lang);
      this.translateService.use(lang);
    }
}
