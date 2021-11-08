import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListDomainModule } from '@to-do-list-app/to-do-list/domain';
import { CreateComponent } from './create.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, ToDoListDomainModule, ReactiveFormsModule],
  declarations: [
    CreateComponent
  ],
  exports: [
    CreateComponent
  ],
})
export class ToDoListFeatureCreateModule {}
