import { Component } from '@angular/core';

import { increment } from '../store/counter.actions';
import { decrement } from '../store/counter.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  constructor(private store:Store) {}

  increment() {
   this.store.dispatch(increment({value: 3}));
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
