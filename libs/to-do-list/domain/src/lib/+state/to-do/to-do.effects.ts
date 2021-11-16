import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import * as ToDoActions from './to-do.actions';
import {ToDoDataService} from '../../infrastructure/to-do.data.service';

@Injectable()
export class ToDoEffects {
  loadToDo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToDoActions.loadToDo),
      switchMap(() =>
        this.toDoDataService.load().pipe(
          map((toDo) =>
            ToDoActions.loadToDoSuccess({toDo})
          ),
          catchError((error) =>
            of(ToDoActions.loadToDoFailure({error}))
          )
        )
      )
    )
  );

  addToDo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToDoActions.addToDo),
      switchMap((action) =>
        this.toDoDataService.add(action.content, action.done).pipe(
          map((toDo) =>
            ToDoActions.addToDoSuccess({toDo})
          ),
          catchError((error) =>
            of(ToDoActions.addToDoFailure({error}))
          )
        )
      )
    )
  );

  updateToDo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToDoActions.updateToDo),
      switchMap((action) =>
        this.toDoDataService.update(action.toDo.id, action.toDo.content, action.toDo.done).pipe(
          map((toDo) =>
            ToDoActions.updateToDoSuccess({toDo})
          ),
          catchError((error) =>
            of(ToDoActions.updateToDoFailure({error}))
          )
        )
      )
    )
  );

  deleteToDo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToDoActions.deleteToDo),
      switchMap((action) =>
        this.toDoDataService.delete(action.id).pipe(
          map((toDo) =>
            ToDoActions.deleteToDoSuccess({id: action.id, success: toDo})
          ),
          catchError((error) =>
            of(ToDoActions.updateToDoFailure({error}))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private toDoDataService: ToDoDataService
  ) {
  }
}
