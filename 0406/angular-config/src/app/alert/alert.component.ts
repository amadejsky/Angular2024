import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  template: '<div>This is alert {{message}}</div>',
  styles: [`
  div{
    border: 1px solid black;
    background: salmon;
    padding: 10px;
  }
  `]
})
export class AlertComponent {
@Input() message:string ='';
}
