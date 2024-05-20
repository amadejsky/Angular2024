import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../test-logging.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit, OnDestroy{
 subscription: Subscription;
  constructor(private shoppingService: ShoppingListService, private loggingService: LoggingService){}
  ingredients: Ingredient[];

  ngOnInit(){
    this.ingredients=this.shoppingService.getIngredients();
   this.subscription =  this.shoppingService.ingredientsChange
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
    this.loggingService.printLog('Hello from Shopping List Ng On Init!');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

 onEdit(index: number){
  this.shoppingService.startedEditing.next(index);
 }


}
