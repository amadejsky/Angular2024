import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../shared/recipe.model'
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent implements OnInit{
  @Input('recipeModel') recipe: Recipe;
  @Input() id: number;
  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ){}
 
  ngOnInit(){
  //  this.recipe = this.recipeService.getRecipeById(this.route.snapshot.queryParams['id']);
  console.log('id is '+this.id)
  }
  // emitDataDetails(recipe: Recipe){
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}
