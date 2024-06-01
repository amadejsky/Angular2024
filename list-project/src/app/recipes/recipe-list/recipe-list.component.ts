import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit, OnDestroy{
  // @Output() recipeEmittedFromList = new EventEmitter<Recipe>();
  recipies: Recipe[];
  subscription: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ){}

  ngOnInit(){
    this.subscription = 
    this.store.select('recipes')
    .pipe(map(recipesState => recipesState.recipes))
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipies = recipes;
      }
    )
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
