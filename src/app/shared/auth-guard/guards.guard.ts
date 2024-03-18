import { CanActivateFn } from '@angular/router';
import {HelperService} from "../../services/helper.service";



export const guardsGuard: CanActivateFn = (route, state) => {

  if (localStorage.getItem('session')){

  return true;
  }else {
  return false;
  }

};

