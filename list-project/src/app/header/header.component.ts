import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  collapsed = true;
  @Output('selected') selected = new EventEmitter<string>();

  onSelect(feature: string){
    this.selected.emit(feature);
  }

}
