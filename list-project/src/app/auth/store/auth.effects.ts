import { Actions, ofType } from "@ngrx/effects";
//import { createEffect } from '@ngrx/effect';

import * as AuthActions from './auth.actions';
import { HttpClient } from "@angular/common/http";
import { evnironment } from "../../environments/environment";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { of } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../user.model";
import { AuthService } from "../auth.service";
export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    //optional for sign up 
    registered?:boolean;
}
const handleAuth = (expiresIn: number, email: string, userId: string, token: string) => {
    const expirationDate = new Date(new Date().getTime() + expiresIn*1000);
    const user = new User(email,userId,token,expirationDate);
    localStorage.setItem('userData', JSON.stringify(user));
    return new AuthActions.AuthSuccess({email: email,userId: userId, token: token, expirationDate: expirationDate});
}
const handleError = (errorRes: any) => {
    let errorMessage = 'An unknown error!';
    if(!errorRes.error || !errorRes.error.error){
        return of(new AuthActions.AuthFail(errorMessage));
    }
    switch(errorRes.error.message){
        case 'EMAIL_EXISTS':
            errorMessage = 'This email exists already!';
        break; 
        case 'Email_NOT_FOUND':
            errorMessage = 'This email do not exists!';
        break;    
        case 'INVALID_PASSWORD':
            errorMessage = 'This password is invalid!';
        break; 
    }
                return of(new AuthActions.AuthFail(errorMessage));
}
@Injectable()
export class AuthEffects {
    @Effect()
    authSignup = this.actions$.pipe(
        ofType(AuthActions.SIGNUP_STR),
        switchMap((signupAction: AuthActions.SignupStart)=>{
            return this.http
            .post<AuthResponseData>(
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + evnironment.firebaseAPIKey,
                {
                    email: signupAction.payload.email,
                    password: signupAction.payload.password,
                    returnSecureToken: true
                }
            ).pipe(
                tap(resData=>{
                    this.authService.setLogoutTimer(+resData.expiresIn*1000);
                }),
                map(resData=>{
                  return handleAuth (+resData.expiresIn,resData.email,resData.localId,resData.idToken);
                }),catchError(errorRes=>{
                  return handleError(errorRes);
            }));
        }),
        
    );
    @Effect()
    authLogin = this.actions$.pipe(
        ofType(AuthActions.LOGIN_START),
        switchMap((authData: AuthActions.LoginStart)=>{
            return this.http
            .post<AuthResponseData>(
                `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=`+ evnironment.firebaseAPIKey,
                {
                    email: authData.payload.email,
                    password: authData.payload.password,
                    returnSecureToken: true
                }
            ).pipe(
                tap(resData=>{
                    this.authService.setLogoutTimer(+resData.expiresIn*1000);
                }),
                map(resData=>{
                    return handleAuth (+resData.expiresIn,resData.email,resData.localId,resData.idToken);
                }),catchError(errorRes=>{
                    return handleError(errorRes);
            }));
        }),
    );
    @Effect({dispatch: false})
    authRedirect = this.actions$.pipe(ofType(AuthActions.AUTH_SUCCESS), tap(()=>{
        this.router.navigate(['/']);
    })
)

@Effect()
autoLogin = this.actions$.pipe(
    ofType(AuthActions.AUTO_LGN),
    map(()=>{
        const userData: {
            email:string,
            id:string,
            _token:string;
            _tokenExpiratorionDate: string;
 
         }= JSON.parse(localStorage.getItem('userData'));
         if(!userData){
             return {type: 'ID'}
         }
         const loadedUser = new User(userData.email,userData.id,userData._token, new Date(userData._tokenExpiratorionDate)
         );
         if(loadedUser.token){
              const expirationDuration = new Date(userData._tokenExpiratorionDate).getTime() - new Date().getTime();
            this.authService.setLogoutTimer(expirationDuration);
             // this.user.next(loadedUser);
             return new AuthActions.AuthSuccess({email: loadedUser.email, userId: loadedUser.id, token: loadedUser.token, expirationDate: new Date(userData._tokenExpiratorionDate)});
            //  const expirationDuration = new Date(userData._tokenExpiratorionDate).getTime() - new Date().getTime();
            //  this.autoLogout(expirationDuration);

         }
         return {type: 'ID'};
    })
)

@Effect({dispatch: false})
authLogout = this.actions$.pipe(ofType(AuthActions.LOGOUT), tap(()=>{
    this.authService.clearLogoutTimer();
    localStorage.removeItem('userData');
    this.router.navigate(['/auth']);
}))



constructor(private actions$: Actions,
        private http: HttpClient, private router: Router, private authService: AuthService
    ){}
}



// authLogin = createEffect(() => this.actions$.pipe(...));