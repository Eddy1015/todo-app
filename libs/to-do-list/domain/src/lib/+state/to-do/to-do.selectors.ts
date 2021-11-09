import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State, TODO_FEATURE_KEY, toDoAdapter, ToDoPartialState} from './to-do.reducer';

// Lookup the 'ToDo' feature state managed by NgRx
export const getToDoState = createFeatureSelector<ToDoPartialState, State>(TODO_FEATURE_KEY);

const {selectAll, selectEntities} = toDoAdapter.getSelectors();

export const getToDoLoaded = createSelector(
  getToDoState,
  (state: State) => state.loaded
);

export const getToDoError = createSelector(
  getToDoState,
  (state: State) => state.error
);

export const getAllToDo = createSelector(
  getToDoState,
  (state: State) => selectAll(state)
);

export const getToDoEntities = createSelector(
  getToDoState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getToDoState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getToDoEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
