import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HelperService} from "../../../services/helper.service";
import {Router} from "@angular/router";
import {ApiService} from "../../../services/api.service";
import {apiRouters} from "../../../core/config/apiRouters";
import {formErrMsg} from "../../../core/config/errorsForm";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{

  public form: FormGroup = new FormGroup<any>({});

  public validations = {
    name: [formErrMsg.required],
    email: [formErrMsg.required , formErrMsg.email],
    password: [formErrMsg.required],
  };
  constructor(public  helperService : HelperService , public  router : Router , public api:ApiService) {
  }

  ngOnInit(): void {
   this.getForm()
  }

  getForm():void{

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      avatar: new FormControl(''),
      email: new FormControl('', [Validators.required , Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }


  validateUser():void{
    this.helperService.spinnerShow();

    if (this.form.invalid){
      this.helperService.field(this.form)
      this.helperService.spinnerHidde();
      return
    }
    this.api.getPro(apiRouters.USERS , false).then(resp=>{
        const data : Array<any> = resp;
        let user = data.find(item=> item.email === this.form.value.email)
          if (user){
            this.helperService.spinnerHidde();
            this.helperService.alert('ERROR' , 'El correo ya se encuentra registrado' , 'error');
            return;
          }else {
            this.save()
          }
    }).catch(()=>{
      this.helperService.alert('SORRY' , 'Tenemos un error' , 'error');
      this.helperService.spinnerHidde()
    })

  }

  save() {
   this.helperService.spinnerShow()
    this.api.postPro(apiRouters.USERS ,this.form.value , false).then(resp=>{
      this.helperService.alert('SAVED' , "CRETED_USER" , 'success');
       this.router.navigateByUrl('/')
      this.helperService.spinnerHidde();
    }).catch(err=>{
      this.helperService.alert('ERROR' , "CRETED_USER_NOT" , 'error')
      this.helperService.spinnerHidde();
    })
  }
}
