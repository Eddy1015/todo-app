import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Store} from "@ngrx/store";
import * as fromToDo from "../+state/to-do/to-do.reducer";
import {addToDo, loadToDo} from "../+state/to-do/to-do.actions";


@Injectable({ providedIn: 'root' })
export class CreateFacade {

  constructor(private store: Store<fromToDo.ToDoPartialState>) { }

  add(toDoContent: string, toDoDone: boolean): void {
    this.store.dispatch(addToDo({ toDoContent, toDoDone }));
  }
}
