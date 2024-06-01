import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Recipe } from "./recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import {  map,  tap } from "rxjs/operators";
import * as fromApp from '../store/app.reducer';
import { Store } from "@ngrx/store";
import * as RecipesActions from '../recipes/store/recipe.actions';
@Injectable({providedIn: 'root'})
export class DataSotrageService{
    constructor(private http: HttpClient, private recipeService: RecipeService,private store: Store<fromApp.AppState>){}

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        return this.http
        .put(
            'https://list-c-project-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes
        )
        .subscribe(response=>{
            console.log(response);
        });
    }

    fetchRecipes(){
       
            return this.http
            .get<Recipe[]>('https://list-c-project-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
            ).pipe( map(recipes =>{
            return recipes.map(recipe => {
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
            });
        }),
            tap(recipes =>{
                this.recipeService.setRecipes(recipes);
                this.store.dispatch(new RecipesActions.SetRecipes(recipes));
            })
        );
    }
             
        
       
    }
