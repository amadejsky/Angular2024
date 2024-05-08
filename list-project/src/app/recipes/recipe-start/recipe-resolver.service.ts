import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "../../shared/recipe.model";
import { DataSotrageService } from "../../shared/data-storage-service";
import { RecipeService } from "../recipe.service";

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]>{

constructor(private dataStorageService: DataSotrageService, private recipeService: RecipeService){}
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const recipes = this.recipeService.getRecipes();
    if(recipes.length===0){
        return this.dataStorageService.fetchRecipes();
    }else{
        return recipes;
    }
    return this.dataStorageService.fetchRecipes();
}


}