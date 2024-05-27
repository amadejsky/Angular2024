import { Action, createAction, props } from "@ngrx/store";

export const increment = createAction(
    '[Counter] Increment',
    props<{value: number}>()
);

export const INCREMENT = '[Counter] Increment'

export const decrement = createAction(
    '[Counter] decrement'
);

// export class IncrementAction implements Action {
//     readonly type=INCREMENT;
//     constructor(public value: number){
        
//     }

// }

// export class DecrementAction implements Action {
//     readonly type='[Counter] Decrement';
//     constructor(public value: number){
        
//     }

// }

// export type CounterActions = IncrementAction ;