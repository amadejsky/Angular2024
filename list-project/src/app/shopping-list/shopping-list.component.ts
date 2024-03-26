import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit{
 
  constructor(private shoppingService: ShoppingListService){}
  ingredients: Ingredient[];

  ngOnInit(){
    this.ingredients=this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChange
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  

 


}
