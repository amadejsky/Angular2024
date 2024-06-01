import { User } from "../user.model";
import * as AuthActions from "./auth.actions";

export interface State {
    user: User;
    authError: string;
    loading: boolean;
}

const initialState: State = {
    user: null,
    authError: null,
    loading: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions){
    switch(action.type){
        case AuthActions.AUTH_SUCCESS:
            const user = new User(action.payload.email, action.payload.userId, action.payload.token,
                action.payload.expirationDate
            );
            return {
                ...state,
                authError: null,
                user: user,
                loading: false
            };
        case AuthActions.LOGOUT: 
        return {
            ...state,
            uer: null
        };
        case AuthActions.LOGIN_START:
        case AuthActions.SIGNUP_STR: 
            return {
                ...state,
                authError: null,
                loading: true
            };
        case AuthActions.AUTH_FAIL:
            return {
                ...state,
                user: null,
                authError: action.payload,
                loading: false
            }
        case AuthActions.CLEAR_ERR:
            return {
                ...state,
                authError: null,
            };
        default:
            return state;   
    }
}