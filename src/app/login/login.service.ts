import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userAuthenticated: boolean = false;

  constructor(private router: Router) { }
  
  doLogin(user: User) {
    if (user.email === 'usuario@email.com' && user.password === '123456') {
      
      this.userAuthenticated = true;

      this.router.navigate(['home'])

    } else {
      this.userAuthenticated = false;
    }
  }

  userIsAuthenticated() {
    return this.userAuthenticated;
  }
  
}
