import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../recipe.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit{
id: number;
editMode = false;
recipe: Recipe;
recipeForm: FormGroup;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService){}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        console.log(this.editMode);
        this.initForm();
      }
    )
  }
  private initForm(){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDesc = '';
    if( this.editMode){
      const recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDesc = recipe.description;
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'desc': new FormControl(recipeDesc)
    })
  }

  onSubmit(){
    console.log(this.recipeForm)
  }

}
