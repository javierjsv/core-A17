import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HelperService} from "../../../services/helper.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone : false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form = new FormGroup({
    email:new FormControl('' , Validators["required"]),
    password:new FormControl('' ,Validators["required"]),
  });


constructor(public  helperService : HelperService , public  router : Router) {
}

  save():void{
    console.log(this.form.value)
// TODO componente reutilazable para manejo de errores
    // TODO validar login si existe vamos directos al home
    // TODO Mostrar correo en el home
    this.helperService.spinnerShow();
      if (this.form.value.email === 'javierjsv@hotmail.com' && (this.form.value.password === "1234")){

        const data  = {
          email :  'javierjsv@hotmail.com',
          password :"1234"
        }
        this.helperService.setLocalSorage('user' ,  JSON.stringify(data));
        this.helperService.setLocalSorage('session' , 'true');
        this.router.navigateByUrl('home');
      }else {
        this.helperService.alert('ERROR' , 'correo o contraseña invalidad' , 'error');
      }

      this.helperService.spinnerHidde()
  }

}
