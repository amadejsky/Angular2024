import { Component, EventEmitter, Output } from '@angular/core';
import { defaultUrlMatcher } from '@angular/router';
import { Recipe } from '../shared/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  @Output() recipeEmitFromList = new EventEmitter<Recipe>();
  selectedRecipe: Recipe;

  uploadSelectedRecipe(event: Recipe){
    this.selectedRecipe=event;
  }

}
