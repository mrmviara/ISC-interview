import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from './user.service';
import { take, map } from 'rxjs/operators';
import {JwtService} from './jwt.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService,
    private jwtService: JwtService

  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {

    if (!this.jwtService.getToken()) {
      this.userService.purgeAuth();
      return this.userService.isAuthenticated.pipe(take(1));
    }
    else {
      this.userService.populate();
      return this.userService.isAuthenticated.pipe(take(1));
    }


  }
}
