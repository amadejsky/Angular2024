import { NgModule } from "@angular/core";
import { Router, Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { BlankComponent } from "./blank/blank.component";

const appRoutes: Routes = [
    { path: '', component: BlankComponent},
    { path: 'recipes', component: RecipesComponent},
    { path: 'shoppinglist', component: ShoppingListComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}