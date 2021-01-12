import { Todo } from './../../models/todo-model';
import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

  constructor(public todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodo().subscribe((todos) => {
      this.todoService.todoList = todos;
    });
  }

  /**
   * evenimentul de stergere
   * @param todo todo-ul dorit
   */
  deleteTodo(todo: Todo) {
    this.todoService.todoList  = this.todoService.todoList.filter((t) => t.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

  /**
   * evenimentul de adaugare
   * @param todo todo-ul adaugat
   */
  addTodo(todo: Todo) {
    this.todoService.addTodo(todo);
  }
}
