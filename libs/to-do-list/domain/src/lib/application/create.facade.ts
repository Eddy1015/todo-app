import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromToDo from "../+state/to-do/to-do.reducer";
import {addToDo} from "../+state/to-do/to-do.actions";


@Injectable({providedIn: 'root'})
export class CreateFacade {

  constructor(private store: Store<fromToDo.ToDoPartialState>) {
  }

  add(content: string, done: boolean): void {
    this.store.dispatch(addToDo({content, done}));
  }
}
