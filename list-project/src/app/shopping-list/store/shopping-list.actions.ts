import { Action } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";

export const ADD_ING = '[Shopping List] ADD_ING';
export const ADD_ALL_ING = '[Shopping List] ADD_ALL_INGREDIENTS';
export const UPDATE_ING = '[Shopping List] UPDATE_ING';
export const DELETE_ING = '[Shopping List] DELETE_ING';
export const START_EDIT = '[Shopping List] START_EDIT';
export const STOP_EDIT = '[Shopping List] STOP_EDIT';

export class AddIngredient implements Action{
    readonly type = ADD_ING;
    

    constructor(public payload: Ingredient){}
}

export class AddAllIngredients implements Action{
    readonly type = ADD_ALL_ING;
    constructor(public payload: Ingredient[]){}

}

export class UpdateIngredient implements Action{
    readonly type = UPDATE_ING;
    constructor(public payload: {ingredient: Ingredient}){}
}

export class DeleteIngredient implements Action{
    readonly type = DELETE_ING;
}
export class StartEdit implements Action{
    readonly type = START_EDIT;
    constructor(public payload: number){}
}
export class StopEdit implements Action{
 readonly type = STOP_EDIT;
}

export type ShoppingActions = AddIngredient | AddAllIngredients | UpdateIngredient | DeleteIngredient | StartEdit | StopEdit;