import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpinnerComponent} from "./spinner/spinner.component";
import { NavbarComponent } from './navbar/navbar.component';
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {NgxSpinnerModule} from "ngx-spinner";
import {TranslateModule} from "@ngx-translate/core";
import { BackComponent } from './back/back.component';
import {MaterialModule} from "../modules/material/material.module";



@NgModule({
  declarations: [SpinnerComponent, NavbarComponent, BackComponent],
  imports: [
    CommonModule,
    MatProgressSpinner,
    NgxSpinnerModule,
    TranslateModule,
    MaterialModule
  ],exports:[
    SpinnerComponent, NavbarComponent , BackComponent
  ]
})
export class ComponentsModule { }
