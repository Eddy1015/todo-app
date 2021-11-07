import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ToDo} from '../entities/to-do';

@Injectable({providedIn: 'root'})
export class ToDoDataService {

  constructor(private http: HttpClient) {
  }

  load(): Observable<ToDo[]> {

    const url = 'http://localhost:8080/api/todo';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<ToDo[]>(url, {headers});
  }
}
