
import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingActions from "./shopping-list.actions";

export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
}

const initialState = {
    ingredients: [
        new Ingredient('Tomatoes',15),
        new Ingredient('Cheese',4),
        new Ingredient('Basil',2),
        new Ingredient('Garlic',1)
      ],
      editedIngredient: null,
      editedIngredientIndex: -1
};
export function shoppingReducer(state: State = initialState, action: ShoppingActions.ShoppingActions){
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
            const ingredient = state.ingredients[state.editedIngredientIndex];
            const updatedIngredient = {
                ...ingredient,
                ...action.payload
            };
            const updatedIngredients = [...state.ingredients];
            updatedIngredients[state.editedIngredientIndex] = updatedIngredient;
            return {
                ...state,
                ingredients: updatedIngredients,
                editedIngredientIndex: -1,
                editedIngredient: null
            }; 
        case ShoppingActions.DELETE_ING:    
            return{
                ...state,
                ingredients: state.ingredients.filter((ig, igIndex) => {
                    return igIndex !== state.editedIngredientIndex;
                }),
                editedIngredientIndex: -1,
                editedIngredient: null
            };
        case ShoppingActions.START_EDIT:
            return {
               ...state,
               editedIngredientIndex : action.payload,
               editedIngredient: {...state.ingredients[action.payload]}
            }
        case ShoppingActions.STOP_EDIT: 
        return {
            ...state,
            editedIngredient: null,
            editedIngredientIndex: -1
        }       
            default: 
            return state;
    }
}