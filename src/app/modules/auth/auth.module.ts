import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {LoginComponent} from "./login/login.component";
import {MaterialModule} from "../material/material.module";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule
  ]
})
export class AuthModule { }
