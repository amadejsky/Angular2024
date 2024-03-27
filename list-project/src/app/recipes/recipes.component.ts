import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../shared/recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit{
  // @Output() recipeEmitFromList = new EventEmitter<Recipe>();
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService){}
  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe=recipe;
      }
    );
  }
  

}
