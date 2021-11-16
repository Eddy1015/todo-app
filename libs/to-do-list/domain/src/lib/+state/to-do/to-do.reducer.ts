import {Action, createReducer, on} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

import * as ToDoActions from './to-do.actions';
import {ToDo} from '../../entities/to-do';

export const TODO_FEATURE_KEY = 'toDoList-toDo';

export interface State extends EntityState<ToDo> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}

export interface ToDoPartialState {
  readonly [TODO_FEATURE_KEY]: State;
}

export const toDoAdapter: EntityAdapter<ToDo> = createEntityAdapter<ToDo>();

export const initialState: State = toDoAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const toDoReducer = createReducer(
  initialState,
  on(ToDoActions.loadToDo,
    state => ({...state, loaded: false, error: null})
  ),
  on(ToDoActions.loadToDoSuccess,
    (state, {toDo}) => toDoAdapter.upsertMany(toDo, {...state, loaded: true})
  ),
  on(ToDoActions.loadToDoFailure,
    (state, {error}) => ({...state, error})
  ),
  on(ToDoActions.addToDo,
    state => ({...state, loaded: false, error: null})
  ),
  on(ToDoActions.addToDoSuccess,
    (state, {toDo}) =>
      toDoAdapter.upsertMany([toDo], {...state, loaded: true})
  ),
  on(ToDoActions.addToDoFailure,
    (state, {error}) => ({...state, error})
  ),
  on(ToDoActions.updateToDo,
    state => ({...state, loaded: false, error: null})
  ),
  on(ToDoActions.updateToDoSuccess,
    (state, {toDo}) =>
      toDoAdapter.upsertMany([toDo], {...state, loaded: true})
  ),
  on(ToDoActions.updateToDoFailure,
    (state, {error}) => ({...state, error})
  ),
  on(ToDoActions.deleteToDo,
    state => ({...state, loaded: false, error: null})
  ),
  on(ToDoActions.deleteToDoSuccess,
    (state, {id, success}) => {
      if (success) {
        return toDoAdapter.removeOne(id, {...state, loaded: true});
      }
      return {...state, loaded: true};
    }
  ),
  on(ToDoActions.deleteToDoFailure,
    (state, {error}) => ({...state, error})
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return toDoReducer(state, action);
}
