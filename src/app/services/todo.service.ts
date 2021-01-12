import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from '../models/todo-model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoAPI: string = 'https://jsonplaceholder.typicode.com/todos';
  todoListLimit: string = '?_limit=10';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  todoList: Todo[] = [];

  constructor(private http: HttpClient) {}

  /**
   * Metoda pentru pentru a genera todo-uri
   *
   * @return - Todo list
   */
  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todoAPI}${this.todoListLimit}`);
  }

  /**
   * Metoda pentru a adauga un todo in lista
   *
   * @param todo - noul todo
   * @return - todo-ul creat
   */
  addTodo(todo: Todo) {
    this.todoList.push(todo);
  }

  /**
   * Metoda utilizata pentru a sterge un todo din lista
   * @param todo todo-ul sters
   */
  deleteTodo(todo: Todo): Observable<Todo> {
    const path = `${this.todoAPI}/${todo.id}`;

    return this.http.delete<Todo>(path, this.httpOptions);
  }

  /**
   * Metoda utilizata pentru a marca un todo ca fiind completat
   * @param todo - todo-ul care se doreste a fi completat
   */
  toggleTodo(todo: Todo): Observable<any>{
    const path = `${this.todoAPI}/${todo.id}`;
    
    return this.http.put(path, todo, this.httpOptions);
  }


}
