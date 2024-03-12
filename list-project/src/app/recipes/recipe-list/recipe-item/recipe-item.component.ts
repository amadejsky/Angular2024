import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../../shared/recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input('recipeModel') recipe: Recipe;
  @Output() emitData = new EventEmitter<Recipe>();
 
  ngOnInit(){
    // console.log('recipe image path is: '+this.recipe.imagePath);
    // console.log('recipe name is: '+this.recipe.name);
    // console.log('recipe desc is: '+this.recipe.description);
    // console.log('recipe object is: '+this.recipe)
  }
  emitDataDetails(recipe: Recipe){
    this.emitData.emit(recipe);
  }

}
