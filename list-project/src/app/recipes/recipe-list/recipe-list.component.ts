import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  // @Output() recipeEmittedFromList = new EventEmitter<Recipe>();
  recipies: Recipe[];
  constructor(private recipeService: RecipeService){}

  ngOnInit(){
    this.recipies = this.recipeService.getRecipes();
  }
  // emitFromItemToListAndFurther(recipe: Recipe){
  //   this.recipeEmittedFromList.emit(recipe);
  //   console.log('emit from item to list and further)'+recipe)
  // }

  

}
