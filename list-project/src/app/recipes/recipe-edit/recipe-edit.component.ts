import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router';
import { Recipe } from '../../shared/recipe.model';

import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { map } from 'rxjs/operators';
import * as RecipeActions from '../store/recipe.actions';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit, OnDestroy{
id: number;
editMode = false;
recipe: Recipe;
recipeForm: FormGroup;
private storeSub: Subscription;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ){}

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
    let ingredients = new FormArray([]);

    if( this.editMode){
      // const recipe = this.recipeService.getRecipeById(this.id);
      this.storeSub = this.store.select('recipes').pipe(map(recipeState =>{
        return recipeState.recipes.find((recipe,index)=>{
          return index === this.id;
        })
      })).subscribe(recipe =>{
        recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDesc = recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          ingredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
      })
      
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'desc': new FormControl(recipeDesc,Validators.required),
      'ingredients': ingredients
    })
  }

  onSubmit(){
    console.log(this.recipeForm)
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']
    // );
    if(this.editMode){
      // this.recipeService.updateRecipe(this.id, this.recipeForm.value)
      this.store.dispatch(new RecipeActions.UpdateRecipe({index: this.id, newRecipe: this.recipeForm.value}))
    }else {
      // this.recipeService.addRecipe(this.recipeForm.value)
      this.store.dispatch(new RecipeActions.AddRecipe(this.recipeForm.value))
    }
    this.onCancel();
  }

  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAdd(){
    // let ingredient = new Ingredient(this.recipeForm.)
    // this.sH.addItem()
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null,[Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDelete(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  ngOnDestroy(): void {
    if(this.storeSub){
      this.storeSub.unsubscribe();
    }
    
  }

}
