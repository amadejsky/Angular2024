import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit, OnDestroy{
  // @Output() recipeEmittedFromList = new EventEmitter<Recipe>();
  recipies: Recipe[];
  subscription: Subscription;
  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.subscription = 
    this.recipeService.recipesChanged
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipies = recipes;
      }
    )
    this.recipies= this.recipeService.getRecipes();
  }
  // emitFromItemToListAndFurther(recipe: Recipe){
  //   this.recipeEmittedFromList.emit(recipe);
  //   console.log('emit from item to list and further)'+recipe)
  // }
  // onNewRecipe(){
  //   this.router.navigate(['new'], {relativeTo: this.route});
  // }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
