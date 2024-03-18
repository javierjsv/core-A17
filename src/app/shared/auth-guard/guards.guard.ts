import {CanActivateFn, Router} from '@angular/router';
import { Injectable } from '@angular/core';

import {HelperService} from "../../services/helper.service";
import {inject} from "@angular/core";




export const guardsGuard: CanActivateFn = (route, state) => {
  const helperService  = inject(HelperService);
  const router  = inject(Router);
  if (helperService.getLocalSorage('session')){
  return true;
  }else {
     const url = router.createUrlTree(['/'])
    return url
  }
};

