import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpinnerComponent} from "./spinner/spinner.component";
import { NavbarComponent } from './navbar/navbar.component';
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {NgxSpinnerModule} from "ngx-spinner";
import {TranslateModule} from "@ngx-translate/core";
import { BackComponent } from './back/back.component';
import {MaterialModule} from "../modules/material/material.module";
import { HomeComponent } from './home/home.component';
import { ErrorsFormComponent } from './errors-form/errors-form.component';



@NgModule({
  declarations: [SpinnerComponent, NavbarComponent, BackComponent, HomeComponent, ErrorsFormComponent],
  imports: [
    CommonModule,
    MatProgressSpinner,
    NgxSpinnerModule,
    TranslateModule,
    MaterialModule
  ],exports:[
    SpinnerComponent, NavbarComponent , BackComponent , ErrorsFormComponent
  ]
})
export class ComponentsModule { }
