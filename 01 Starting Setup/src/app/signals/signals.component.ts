import { NgFor } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { effect } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([]);
  counter = signal(0);
  doubleCompute = computed(()=>this.counter()*2);

  consgructor(){
    effect(()=>console.log(this.counter()));
  }

  increment() {
    // this.counter.update((oldCounter)=>oldCounter+1);
    this.counter.set(this.counter()+1);
    this.actions.update((oldActions) => {
      return [...oldActions, 'INCREMENT'];
    });
    
  }

  decrement() {
    this.counter.update((oldCounter)=>oldCounter-1);
    this.actions.update((oldActions) => {
      return [...oldActions, 'DECREMENT'];
    });
  }
}
