import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ToDoActions from './to-do.actions';
import { ToDo } from '../../entities/to-do';

export const TODO_FEATURE_KEY = 'toDoList-toDo';

export interface State extends EntityState<ToDo> {
  selectedId ?: string | number;          // which ToDo record has been selected
  loaded      : boolean;                  // has the ToDo list been loaded
  error      ?: string | null;            // last known error (if any)
}

export interface ToDoPartialState {
  readonly [TODO_FEATURE_KEY]: State;
}

export const toDoAdapter: EntityAdapter<ToDo> = createEntityAdapter<ToDo>();

export const initialState: State = toDoAdapter.getInitialState({
  // set initial required properties
  loaded : false
});

const toDoReducer = createReducer(
  initialState,
  on(ToDoActions.loadToDo,
    state => ({ ...state, loaded: false, error: null })
  ),
  on(ToDoActions.loadToDoSuccess,
    (state, { toDo }) => toDoAdapter.upsertMany(toDo, { ...state, loaded: true })
  ),
  on(ToDoActions.loadToDoFailure,
    (state, { error }) => ({ ...state, error })
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return toDoReducer(state, action);
}
