import { Action } from "@ngrx/store";
import { Ingredient } from "../shared/ingredient.model";

const initialState = {
    ingredients: [
        new Ingredient('Tomatoes',15),
        new Ingredient('Cheese',4),
        new Ingredient('Basil',2),
        new Ingredient('Garlic',1)
      ]
};
export function shoppingReducer(state = initialState, action: Action){
    switch(action.type){
        case 'ADD_ING': 
            return {
                ...state,
                ingredients: [...state.ingredients, action ]
            };
    }
}