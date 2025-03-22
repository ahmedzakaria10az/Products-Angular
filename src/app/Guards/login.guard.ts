import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../Components/services/login.service';

@Injectable ({providedIn:'root'})

export class loginGuard {
  constructor( private root : Router , private loginObj : LoginService){}

  canActiveFun(){
    if(this.loginObj.isLogged){
      return true
    }else{
      alert(" You are not authorized to access this page!")
      this.root.navigateByUrl('/')
      return false
    }
  }
}

export const loginGuardd: CanActivateFn = (route, state) => {
  return inject(loginGuard).canActiveFun();
};
