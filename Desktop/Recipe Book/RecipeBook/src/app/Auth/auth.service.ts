import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

export interface AuthResposeData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class authService {

    private tokenExpirationTimer: any;

    user = new BehaviorSubject<User>(null);

    constructor(private http: HttpClient, private router: Router) {}

    autoLogin() {
        const userData: {
            email: string;
            id: string;
            _token: string;
            _tokenExpirationDate: string;
         } = JSON.parse(localStorage.getItem('userData'));
        
        if(!userData) {
            return;
        }

        const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

        if(loadedUser.token) {
            this.user.next(loadedUser);
            const expirationDuration = 
                  new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();

            this.autoLogOut(expirationDuration);
        }
    }

    logOut() {
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');

        if(this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }

        this.tokenExpirationTimer = null;
    }

    onSignUp(email: string, password: string) {
        return this.http.post<AuthResposeData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+environment.firebaseKey,
        {email: email,
         password: password,
         returnSecureToken: true
        })
        .pipe(catchError(this.handleError),
        tap(resData => { this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn)}));
    }

    onLogin(email:string, password:string) {
        return this.http.post<AuthResposeData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+environment.firebaseKey,
        {email:email,
         password:password,
         returnSecureToken: true})
         .pipe(catchError(this.handleError),
         tap(resData => { this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn)}));
    }

    autoLogOut(expirationDuration: number) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logOut()
        }, expirationDuration);
    }

    private handleError(errorRes:HttpErrorResponse) {
        let errorMessage = 'Unknown error occured!'
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch(errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email already exists';
                break;
            case 'OPERATION_NOT_ALLOWED':
                errorMessage = 'Password Sign in is disabled for this project';
                break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                errorMessage = 'Login Blocked! Please try again later';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'Email does not exist';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'Password is incorrect';
                break;
            case 'USER_DISABLED':
                errorMessage = 'User has been disabled by admin';
                break;
        }
        return throwError(errorMessage);
    }

    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
      
      const expirationDate = new Date(new Date().getTime() + expiresIn*1000);
      const user = new User(email,userId,token,expirationDate);
      
      this.user.next(user);

      this.autoLogOut(expiresIn*1000);

      localStorage.setItem('userData',JSON.stringify(user));
      
    }
}
