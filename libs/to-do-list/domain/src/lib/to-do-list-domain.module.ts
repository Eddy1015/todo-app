import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoEffects } from './+state/to-do/to-do.effects';
import * as fromToDo from './+state/to-do/to-do.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(fromToDo.TODO_FEATURE_KEY, fromToDo.reducer), EffectsModule.forFeature([ToDoEffects])],
})
export class ToDoListDomainModule {}
