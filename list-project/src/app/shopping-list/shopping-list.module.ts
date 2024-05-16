import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RecipesRoutingModule } from "../recipes/recipes-routing.module";


@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports: [
        RouterModule.forChild([
            { path: 'shoppinglist', component: ShoppingListComponent},
        ]), 
        CommonModule, 
        FormsModule,
        ReactiveFormsModule, 
        RecipesRoutingModule]
})
export class ShoppingListModule{

}