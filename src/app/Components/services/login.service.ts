import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  intialSubscription =  {role:'',isLogin:false}

       dynamicUser = new BehaviorSubject<{role:string , isLogin:boolean}>( this.intialSubscription)
  constructor() { }

  loginFun( role:string){
  this.dynamicUser.next({role: role , isLogin : true} )
  localStorage.setItem('userToken','123456')
  }

  logoutFun(){
    this.dynamicUser.next(this.intialSubscription )
    localStorage.removeItem('userToken')
  }

  get isLogged(){
    return localStorage.getItem('userToken') ? true : false ;
  }

  getbehavSubject(){
return this.dynamicUser
  }
}
