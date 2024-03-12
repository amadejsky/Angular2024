import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  incrementedNumber: number = 0;
  increment: boolean = false;

  @Output('numberEmitEvent') numberEmitEvent = new EventEmitter<number>();

  sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
  }

  async startCounting(){
    this.increment=true;
    while(this.increment){
      this.incrementedNumber++;
    await this.sleep(500);
    console.log(this.incrementedNumber);
    this.numberEmitEvent.emit(this.incrementedNumber);
    }
    
  }

  resetGame(){
    this.increment=false;
    this.incrementedNumber=0;
    console.log(this.incrementedNumber);

  }

}
