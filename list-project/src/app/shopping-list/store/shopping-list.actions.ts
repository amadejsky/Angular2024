import { Action } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";

export const ADD_ING = 'ADD_ING';
export const ADD_ALL_ING = 'ADD_ALL_INGREDIENTS';
export const UPDATE_ING = 'UPDATE_ING';
export const DELETE_ING = 'DELETE_ING';

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
    constructor(public payload: {index: number, ingredient: Ingredient}){}
}

export class DeleteIngredient implements Action{
    readonly type = DELETE_ING;
    constructor(public payload: number){}
}

export type ShoppingActions = AddIngredient | AddAllIngredients | UpdateIngredient | DeleteIngredient;