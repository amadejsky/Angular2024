import { Component, EventEmitter, Output } from '@angular/core';
import { DataSotrageService } from '../shared/data-storage-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  collapsed = true;
  @Output('selected') selected = new EventEmitter<string>();

  constructor(private dataStorageService: DataSotrageService){}

  onSelect(feature: string){
    this.selected.emit(feature);
  }

  onSaveData(){
    this.dataStorageService.storeRecipes();
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }

}
