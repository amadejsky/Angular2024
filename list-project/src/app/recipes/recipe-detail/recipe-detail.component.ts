import { Component, OnInit} from '@angular/core';
import { Recipe } from '../../../app/shared/recipe.model'
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  // constructor(private shoppingService: ShoppingListService){}
  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute
  ){}

  addToShoppingList(){
    // for (const ingredient of this.recipe.ingredients) {
    //   this.shoppingService.addItem(ingredient);
    // }
    // console.log(this.shoppingService.getIngredients);
    this.recipeService.addIngredients(this.recipe.ingredients);
   
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeById(this.id);
      }
    );
    // this.recipe = this.recipeService.getRecipeById(this.route.snapshot.params['id']);
    console.log('item (object) from details '+this.recipe)
  }

  onEdit(){
    
  }

}
