import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { authService } from './auth.service';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class authGuardService implements CanActivate{

    constructor(private authservice: authService,
                private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot
               ): boolean | UrlTree | Promise<boolean|UrlTree> | Observable<boolean|UrlTree> {
                   return this.authservice.user.pipe(map(user => {
                       const isAuth = !!user;
                       if(isAuth) {
                           return true;
                       }
                       return this.router.createUrlTree(['/auth']);
                   })
                   );
               
               }
}