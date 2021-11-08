import {Component, OnInit} from '@angular/core';
import {CreateFacade} from '@to-do-list-app/to-do-list/domain';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'to-do-list-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  newToDo = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);

  constructor(private createFacade: CreateFacade) {
  }


  ngOnInit() {
    console.log('blub');
  }

  save(content: string) {
    console.log(content);
    this.createFacade.add(content, false);
    this.newToDo.setValue(null);
  }

}

