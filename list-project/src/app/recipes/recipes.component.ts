import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../shared/recipe.model';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit{
  // @Output() recipeEmitFromList = new EventEmitter<Recipe>();
  selectedRecipe: Recipe;
  constructor(){}
  ngOnInit(): void {
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => {
    //     this.selectedRecipe=recipe;
    //   }
    // );
  }
  

}
