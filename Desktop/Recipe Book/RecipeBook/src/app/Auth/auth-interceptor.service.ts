import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authService } from './auth.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class authInterceptorService implements HttpInterceptor{

    constructor(private authservice: authService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return this.authservice.user.pipe(
            take(1),
            exhaustMap(user => {
                if(!user) {
                    return next.handle(req);
                }
                const modifiedReq = req.clone({
                    params: new HttpParams().set('auth',user.token)
                });
                return next.handle(modifiedReq);
            })
        );

    }
}