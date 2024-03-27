import { Component, Input } from '@angular/core';
import { Recipe } from '../../../app/shared/recipe.model'
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  @Input('recipe') recipe: Recipe;

  // constructor(private shoppingService: ShoppingListService){}
  constructor(private recipeService: RecipeService){}

  addToShoppingList(){
    // for (const ingredient of this.recipe.ingredients) {
    //   this.shoppingService.addItem(ingredient);
    // }
    // console.log(this.shoppingService.getIngredients);
    this.recipeService.addIngredients(this.recipe.ingredients);
  }

}
