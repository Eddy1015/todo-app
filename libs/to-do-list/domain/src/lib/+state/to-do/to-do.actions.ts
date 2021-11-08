import { createAction, props } from '@ngrx/store';
import { ToDo } from '../../entities/to-do';

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
  props<{ toDoContent: string, toDoDone: boolean }>()
);

export const addToDoSuccess = createAction(
  '[ToDo] Add ToDo Success',
  props<{ toDo: ToDo }>()
);

export const addToDoFailure = createAction(
  '[ToDo] Add ToDo Failure',
  props<{ error: any }>()
);
