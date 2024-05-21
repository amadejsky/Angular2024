import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap } from "rxjs/operators";
import { BehaviorSubject, Subject, throwError } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";
import { evnironment } from "../environments/environment";
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

@Injectable({providedIn: 'root'})
export class AuthService{

    user = new BehaviorSubject<User>(null);
    private tokenExpirationTimer: any;

    constructor(private http: HttpClient, private router: Router){}

    signup(email: string, password: string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + evnironment.firebaseAPIKey,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            catchError(this.handleError),
            tap(response =>{
             this.handleAuthentication(response.email, response.localId, response.idToken, +response.expiresIn)
            })
        );
    }

    login(email:string, password:string){
        return this.http.post<AuthResponseData>(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=`+ evnironment.firebaseAPIKey,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            catchError(this.handleError),
            tap(response =>{
                this.handleAuthentication(response.email, response.localId, response.idToken, +response.expiresIn)
               }));
             

    }
    private handleError(errorRes: HttpErrorResponse){
        let errorMessage = 'An unknown error!';
        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorRes);
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
        return throwError(errorMessage);
    }

    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number){
        const expirationDate = new Date(new Date().getTime() + expiresIn*1000);
        const user = new User(
            email, 
            userId, 
            token,
            expirationDate
        );
        this.user.next(user); 
        this.autoLogout(expiresIn*1000);
        localStorage.setItem('userData', JSON.stringify(user)); 

    }
    autologin(){
        const userData: {
           email:string,
           id:string,
           _token:string;
           _tokenExpiratorionDate: string;

        }= JSON.parse(localStorage.getItem('userData'));
        if(!userData){
            return;
        }
        const loadedUser = new User(userData.email,userData.id,userData._token, new Date(userData._tokenExpiratorionDate)
        );
        if(loadedUser.token){
            this.user.next(loadedUser);
            const expirationDuration = new Date(userData._tokenExpiratorionDate).getTime() - new Date().getTime();
            this.autoLogout(expirationDuration);
        }

    }

    logout(){
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        if(this.tokenExpirationTimer){
          clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;

    }

    autoLogout(expirationDuration: number){
        this.tokenExpirationTimer = setTimeout(()=>{
            this.logout();
        },expirationDuration)
    }
};
