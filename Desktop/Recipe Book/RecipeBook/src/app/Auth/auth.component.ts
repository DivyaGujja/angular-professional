import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { authService, AuthResposeData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    errormsg:string = null;
    

    constructor(private authService: authService,
                private router: Router) {}
    
    onCloseAlert() {
        this.errormsg = null;
    }
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(authForm:NgForm) {
        if (!authForm.valid) {
            return;
        }

        const email = authForm.value.email;
        const password = authForm.value.password;
        let authObs: Observable<AuthResposeData>;

        this.isLoading = true;

        if (this.isLoginMode) {
            authObs = this.authService.onLogin(email, password);
        } else {
            authObs = this.authService.onSignUp(email, password)
        }
        authForm.reset();

        authObs.subscribe(
            resData => {
                console.log(resData);
                this.isLoading = false;
                this.router.navigate(['/recipes']);
            },
            errorMessage => {
                this.isLoading = false;
                this.errormsg = errorMessage;
            }
            
        );
    }
}