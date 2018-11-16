import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from '../login/login.service';

@Injectable()
export class AuthenticationGuard implements CanActivate, CanLoad {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
    
      console.log('Authentication Guard')

      return this.checkAccess();
  }

  private checkAccess() {
    if( this.loginService.userIsAuthenticated() ) {
      return true;
    }

    this.router.navigate(['/login']);
    console.log('retornou para o /login')

    return false;
  }

  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    console.log('canLoad: verificando se usuario pode carregar o conteudo do modulo')
    
    return this.checkAccess();
  }
}
