import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  // @Output() recipeEmittedFromList = new EventEmitter<Recipe>();
  recipies: Recipe[];
  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.recipies = this.recipeService.getRecipes();
  }
  // emitFromItemToListAndFurther(recipe: Recipe){
  //   this.recipeEmittedFromList.emit(recipe);
  //   console.log('emit from item to list and further)'+recipe)
  // }
  // onNewRecipe(){
  //   this.router.navigate(['new'], {relativeTo: this.route});
  // }
  

}
