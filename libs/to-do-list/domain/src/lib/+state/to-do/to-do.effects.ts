import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ToDoActions from './to-do.actions';
import { ToDoDataService } from '../../infrastructure/to-do.data.service';

@Injectable()
export class ToDoEffects {
  loadToDo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToDoActions.loadToDo),
      switchMap((action) =>
        this.toDoDataService.load().pipe(
          map((toDo) =>
            ToDoActions.loadToDoSuccess({ toDo })
          ),
          catchError((error) =>
            of(ToDoActions.loadToDoFailure({ error }))
          )
        )
      )
    )
  );

 constructor(
   private actions$: Actions,
   private toDoDataService: ToDoDataService
  ) { }
}
