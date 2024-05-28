import { Action, createAction, props } from "@ngrx/store";

export const increment = createAction(
    '[Counter] Increment',
    props<{value: number}>()
);

export const INCREMENT = '[Counter] Increment';

export const DECREMENT = '[Counter] Decrement';

export const decrement = createAction(
    '[Counter] decrement',
    props<{value: number}>()
);

export const init = createAction(
    '[Counter] Init'
)
export const set = createAction(
    '[Counter] Set',
    props<{value: number}>()
)


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