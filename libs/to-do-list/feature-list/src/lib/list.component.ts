import {Component, OnInit} from '@angular/core';
import {ListFacade} from '@to-do-list-app/to-do-list/domain';

@Component({
  selector: 'to-do-list-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  toDoList$ = this.listFacade.toDoList$;

  constructor(private listFacade: ListFacade) {
  }

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.listFacade.load();
  }

  update(id: number, content: string, done: boolean): void {
    this.listFacade.update(id, content, done);
  }
}

