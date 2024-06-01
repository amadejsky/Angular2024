import { Action } from "@ngrx/store";

export const LOGIN_START = '[Auth] Login Start';
export const AUTH_FAIL = '[Auth] Login Fail';
export const SIGNUP_STR = '[Auth] Signup Start';
export const AUTH_SUCCESS = "[Auth] LOGIN";
export const CLEAR_ERR = '[AUTH] Clear Error';
export const AUTO_LGN = '[Auth] Auto login';
export const LOGOUT = "[Auth] LOGOUT";


export class AuthSuccess implements Action{
    readonly type = AUTH_SUCCESS;

    constructor(public payload: {
        email: string;
        userId: string;
        token: string;
        expirationDate: Date;
        }
    ){}

}

export class Logout implements Action{
    readonly type = LOGOUT;

}
export class LoginStart implements Action {
    readonly type = LOGIN_START;
    constructor(public payload:{email:string, password: string}){}
}

export class AuthFail implements Action{
    readonly type = AUTH_FAIL;
    constructor(public payload: string){}
}

export class SignupStart implements Action {
    readonly type = SIGNUP_STR;
    constructor(public payload: {email: string;password: string}){}
}

export class ClearErr implements Action {
    readonly type = CLEAR_ERR;
  
}
export class AutoLogin implements Action{
    readonly type = AUTO_LGN;

}

export type AuthActions = AuthSuccess | Logout | LoginStart | AuthFail | SignupStart | ClearErr | AutoLogin;
