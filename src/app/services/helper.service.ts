import { Injectable } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import Swal from 'sweetalert2';
import {FormControl, FormGroup} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(public spinner: NgxSpinnerService,
              public translateService: TranslateService) { }


  spinnerShow() :void{
  this.spinner.show();
  }
  spinnerHidde() :void{
  this.spinner.hide();
  }

  alert(title: string, text: string, icon?: 'success' | 'error' | 'warning' | 'question', timer = 3000):void{
    Swal.fire({
      title : this.translateService.instant(title),
      text :this.translateService.instant(text),
      icon,
      confirmButtonText: this.translateService.instant("CLOSE"),
      buttonsStyling : true,
    })
  }

  field(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.field(control);
      }
    });
  }

  getLocalSorage(item: any): string | undefined {
    if (localStorage.getItem(item)) {
      item = localStorage.getItem(item);
      return item;
    } else {
      return undefined;
    }
  }

  setLocalSorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  deleteLocalStorege(item: string): void {
    localStorage.removeItem(item);
  }


}
