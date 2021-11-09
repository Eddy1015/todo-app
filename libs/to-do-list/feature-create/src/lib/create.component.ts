import {Component} from '@angular/core';
import {CreateFacade} from '@to-do-list-app/to-do-list/domain';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'to-do-list-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  newToDo = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);

  constructor(private createFacade: CreateFacade) {
  }

  save(content: string) {
    this.createFacade.add(content, false);
    this.newToDo.setValue(null);
  }
}

