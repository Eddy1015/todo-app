import {createAction, props} from '@ngrx/store';
import {ToDo} from '../../entities/to-do';

export const loadToDo = createAction(
  '[ToDo] Load ToDo'
);

export const loadToDoSuccess = createAction(
  '[ToDo] Load ToDo Success',
  props<{ toDo: ToDo[] }>()
);

export const loadToDoFailure = createAction(
  '[ToDo] Load ToDo Failure',
  props<{ error: any }>()
);

export const addToDo = createAction(
  '[ToDo] Add ToDo',
  props<{ content: string, done: boolean }>()
);

export const addToDoSuccess = createAction(
  '[ToDo] Add ToDo Success',
  props<{ toDo: ToDo }>()
);

export const addToDoFailure = createAction(
  '[ToDo] Add ToDo Failure',
  props<{ error: any }>()
);

export const updateToDo = createAction(
  '[ToDo] Update ToDo',
  props<{ toDo: ToDo }>()
);

export const updateToDoSuccess = createAction(
  '[ToDo] Update ToDo Success',
  props<{ toDo: ToDo }>()
);

export const updateToDoFailure = createAction(
  '[ToDo] Update ToDo Failure',
  props<{ error: any }>()
);

export const deleteToDo = createAction(
  '[ToDo] Delete ToDo',
  props<{ id: number }>()
);

export const deleteToDoSuccess = createAction(
  '[ToDo] Delete ToDo Success',
  props<{ id: number, success: boolean }>()
);

export const deleteToDoFailure = createAction(
  '[ToDo] Delete ToDo Failure',
  props<{ error: any }>()
);
