
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
export function shoppingReducer(state = initialState, action: ShoppingActions.ShoppingActions){
    switch(action.type){
        case ShoppingActions.ADD_ING: 
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload ]
            };
        case ShoppingActions.ADD_ALL_ING:
            return {
                ...state,
                ingrediens: [...state.ingredients, action.payload]
            };
        case ShoppingActions.UPDATE_ING:
            const ingredient = state.ingredients[action.payload.index];
            const updatedIngredient = {
                ...ingredient,
                ...action.payload.ingredient
            };
            const updatedIngredients = [...state.ingredients];
            updatedIngredients[action.payload.index] = updatedIngredient;
            return {
                ...state,
                ingredients: updatedIngredients
            }; 
        case ShoppingActions.DELETE_ING:    
            return{
                ...state,
                ingredients: state.ingredients.filter((ig, igIndex) => {
                    return igIndex !== action.payload;
                })
            };
            default: 
            return state;
    }
}