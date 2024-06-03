import { Component, OnInit} from '@angular/core';
import { Recipe } from '../../../app/shared/recipe.model'

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { map, switchMap } from 'rxjs/operators';
import * as RecipeActions from '../store/recipe.actions';
import * as ShoppingActions from '../../shopping-list/store/shopping-list.actions';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  // constructor(private shoppingService: ShoppingListService){}
  constructor(
    private route: ActivatedRoute, private router: Router,
    private store: Store<fromApp.AppState>
  ){}

  addToShoppingList(){
    // for (const ingredient of this.recipe.ingredients) {
    //   this.shoppingService.addItem(ingredient);
    // }
    // console.log(this.shoppingService.getIngredients);
   this.store.dispatch(new ShoppingActions.AddIngredient(this.recipe.ingredients)
  );
   
  }

  ngOnInit(): void {
    this.route.params.pipe(map(params=>{
      return +params['id'];
    }),switchMap(id => {
      this.id = id;
      return this.store.select('recipes');
    }),
    map(recipesState => {
      return recipesState.recipes.find((recipe,index)=>{
        return index === this.id;
      });
      }))
      .subscribe(recipe=>{
        this.recipe = this.recipe;
      });
    
    // this.recipe = this.recipeService.getRecipeById(this.route.snapshot.params['id']);
   
  }

  onEdit(){
    
  }

  onDelete(){
    // this.recipeService.deleteItem(this.id);
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id))
    this.router.navigate(['/recipes'])
 }

}
