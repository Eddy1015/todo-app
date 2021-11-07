import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { loadToDo } from '../+state/to-do/to-do.actions';
import * as fromToDo from '../+state/to-do/to-do.reducer';
import * as ToDoSelectors from '../+state/to-do/to-do.selectors';

@Injectable({ providedIn: 'root' })
export class ListFacade {
  loaded$ = this.store.pipe(select(ToDoSelectors.getToDoLoaded));
  toDoList$ = this.store.pipe(select(ToDoSelectors.getAllToDo));
  selectedToDo$ = this.store.pipe(select(ToDoSelectors.getSelected));

  constructor(private store: Store<fromToDo.ToDoPartialState>) { }

  load(): void {
    this.store.dispatch(loadToDo());
  }
}
