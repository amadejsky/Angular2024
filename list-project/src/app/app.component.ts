import { Component } from '@angular/core';
import { Recipe } from '../app/shared/recipe.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'list-project';
  loadedFeature = 'recipe'

  navigate(emited: string){
    this.loadedFeature = emited;
  }

  

}
