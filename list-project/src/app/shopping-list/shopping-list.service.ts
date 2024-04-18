import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";
import { ReactiveFormsModule } from "@angular/forms";
import { catchError } from "rxjs/operators";


export class ShoppingListService{
    ingredientsChange = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    

    private ingredients: Ingredient[] = [
        new Ingredient('Tomatoes',15),
        new Ingredient('Cheese',4),
        new Ingredient('Basil',2),
        new Ingredient('Garlic',1)
      ];

      getIngredient(index: number){
        try{
             return this.ingredients[index];
        }catch(error){
            console.log(error);
        }

       
       
      }

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

    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChange.next(this.ingredients.slice());
    }

    deleteItem(index: number){
        this.ingredients.splice(index,1);
        this.ingredientsChange.next(this.ingredients.slice());
    }

}