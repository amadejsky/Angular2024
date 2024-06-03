import {Action} from "@ngrx/store";
import { Recipe } from "../../shared/recipe.model";

export const SET_RECIPES = '[RECIPES] Set Recipes';

export const FETCH_RECIPES = '[Recipes] Fetch Recipes';
export const ADD_RECIPE = '[RECIPES] Add recipe';
export const UPDATE_RECIPE = '[RECIPES] Update recipe';
export const DELETE_RECIPE = '[RECIPES] Delete recipe';
export const STORE_RECIPES = '[RECIPES] Store Recipes';

export class AddRecipe implements Action{
    readonly type = ADD_RECIPE;

    constructor(public payload: Recipe){}
}

export class UpdateRecipe implements Action{
    readonly type = UPDATE_RECIPE;

    constructor(public payload: {index: number; newRecipe: Recipe}){}
}

export class DeleteRecipe implements Action{
    readonly type = DELETE_RECIPE;

    constructor(public payload: number){}
}

export class SetRecipes implements Action{
    readonly type = SET_RECIPES;

    constructor(public payload: Recipe[]){}
}

export class FetchRecipes implements Action{
    readonly type = FETCH_RECIPES;
}

export class StoreRecipes implements Action{
    readonly type = STORE_RECIPES;
}

export type RecipesActions = SetRecipes | FetchRecipes | AddRecipe | UpdateRecipe | DeleteRecipe | StoreRecipes;