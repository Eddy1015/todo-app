import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListDomainModule } from '@to-do-list-app/to-do-list/domain';
import { ListComponent } from './list.component';

@NgModule({
  imports: [CommonModule, ToDoListDomainModule],
  declarations: [
    ListComponent
  ],
  exports: [
    ListComponent
  ],
})
export class ToDoListFeatureListModule {}
