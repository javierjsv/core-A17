import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HelperService} from "../../../services/helper.service";
import {Router} from "@angular/router";
import {ApiService} from "../../../services/api.service";
import {apiRouters} from "../../../core/config/apiRouters";

@Component({
  selector: 'app-login',
  standalone : false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form = new FormGroup({
    email:new FormControl('javier@hotmail.com' , Validators["required"]),
    password:new FormControl('1234' ,Validators["required"]),
  });
  constructor(public  helperService : HelperService , public  router : Router , public api:ApiService) {
  }
  save():void{
    this.helperService.spinnerShow();
    this.api.getPro(apiRouters.USERS , false).then(resp=>{
      for (let i = 0 ; resp.length > i ; i ++){
        if (resp[i]['email'] === this.form.value.email &&  resp[i]['password'] === this.form.value.password){
          this.helperService.spinnerHidde();
          this.helperService.setLocalSorage('user' ,  JSON.stringify(resp[i]));
          this.helperService.setLocalSorage('session' , 'true');
          this.helperService.alert('Bienvenido' , resp[i]['name'] , 'success');
          this.router.navigateByUrl('home');
          return;
        }else {
          this.helperService.alert('ERROR' , 'correo o contraseña invalidad' , 'error');
          this.helperService.spinnerHidde();
        }
      }

    }).catch(()=>{
      this.helperService.alert('SORRY' , 'Tenemos un error' , 'error');
      this.helperService.spinnerHidde()
    })
  }


  go():void{
    this.router.navigateByUrl('auth/register');
  }
}
