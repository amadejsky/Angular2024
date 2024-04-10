import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";


export class ShoppingListService{
    ingredientsChange = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Tomatoes',15),
        new Ingredient('Cheese',4),
        new Ingredient('Basil',2),
        new Ingredient('Garlic',1)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }  
    addItem(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChange.next(this.ingredients.slice());
    }

    addItems(ingredients: Ingredient[]){
        for(const ingredient of ingredients){
            this.addItem(ingredient);
        }
    }

}