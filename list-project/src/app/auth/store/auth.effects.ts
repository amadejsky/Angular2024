import { Actions, ofType } from "@ngrx/effects";
//import { createEffect } from '@ngrx/effect';

import * as AuthActions from './auth.actions';
import { HttpClient } from "@angular/common/http";
import { evnironment } from "../../environments/environment";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { of } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
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
@Injectable()
export class AuthEffects {
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
                map(resData=>{
                    const expirationDate = new Date(new Date().getTime() + +resData.expiresIn*1000);
                    return new AuthActions.Login({email: resData.email,userId: resData.localId, token: resData.idToken, expirationDate: expirationDate});
                }),catchError(errorRes=>{
                    let errorMessage = 'An unknown error!';
        if(!errorRes.error || !errorRes.error.error){
            return of(new AuthActions.LoginFail(errorMessage));
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
                    return of(new AuthActions.LoginFail(errorMessage));
            }));
        }),
    );
    @Effect({dispatch: false})
    authSucces = this.actions$.pipe(ofType(AuthActions.LOGIN), tap(()=>{
        this.router.navigate(['/']);
    })
)
    constructor(private actions$: Actions,
        private http: HttpClient, private router: Router
    ){}
}



// authLogin = createEffect(() => this.actions$.pipe(...));