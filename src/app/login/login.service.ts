import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }
  
  fazerLogin(usuario: Usuario) {
    if (usuario.email === 'usuario@email.com' && usuario.password === '123456') {
      this.router.navigate(['/home/latest'])
    }
  }
  
}
