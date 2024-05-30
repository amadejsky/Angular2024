import { Action } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingActions from "./shopping-list.actions";

const initialState = {
    ingredients: [
        new Ingredient('Tomatoes',15),
        new Ingredient('Cheese',4),
        new Ingredient('Basil',2),
        new Ingredient('Garlic',1)
      ]
};
export function shoppingReducer(state = initialState, action: ShoppingActions.AddIngredient){
    switch(action.type){
        case ShoppingActions.ADD_ING: 
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload ]
            };
        default: 
            return state;
    }
}