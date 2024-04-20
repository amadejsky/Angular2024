import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../shared/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
@Injectable()
export class RecipeService{
    recipeSelected = new Subject<Recipe>();
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Canadian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ','https://www.interestingfacts.org/wp-content/uploads/2020/01/factsaboutcanadafood-1.jpg',[
            new Ingredient('Pork',1),
            new Ingredient('potato',5)
        ]),
        new Recipe('Spaghetti','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ','https://th.bing.com/th/id/R.8869e4714d5030a91d089968ca47fa24?rik=C%2bNA7asAha%2bBAw&pid=ImgRaw&r=0',[
            new Ingredient('Pasta',2),
            new Ingredient('tomato',5),
            new Ingredient('Meat',2)
        ]),
        new Recipe('BBQ Ribs','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ','https://theboiledpeanuts.com/wp-content/uploads/2020/10/oven-beef-brisket-luxury-oven-roasted-bbq-beef-brisket-of-oven-beef-brisket.jpg',[
            new Ingredient('Sauce',5),
            new Ingredient('Ribs',2),
        ])
      ];

      constructor(private shoppingService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }
    addIngredients(ingredients: Ingredient[]){
        this.shoppingService.addItems(ingredients);
    }

    getRecipeById(id: number){
        try{
             return this.recipes[id];
        }catch (error){
            console.log('Error occured: '+error );
        }
       
        
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice())
    
    }

    updateRecipe(index: number, recipe : Recipe){
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice())
    }


    deleteItem(index: number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }


    
    
}