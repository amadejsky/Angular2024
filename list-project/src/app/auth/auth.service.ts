import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({providedIn: 'root'})
export class AuthService{
    constructor(private http: HttpClient){}

    signup(email: string, password: string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBVXOMLv7LJjC2vtp2KSwp7-bcJA4nUkO4',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(error=>{
            let errorMessage = 'An unknown error!';
            if(!error.error || !error.error.error){
                return throwError(error);
            }
            switch(error.error.message){
                case 'EMAIL_EXISTS':
                    errorMessage = 'This email exists already!';
            }
            return throwError(errorMessage);
        }));
    }
}