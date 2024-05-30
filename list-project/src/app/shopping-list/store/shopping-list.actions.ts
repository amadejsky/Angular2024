import { Action } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";

export const ADD_ING = 'ADD_ING';

export class AddIngredient implements Action{
    readonly type = ADD_ING;
    

    constructor(public payload: Ingredient){}
}