import { Todo } from './../../models/todo-model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  /**
   * inputul primit de la parinte (todo-list)
   */
  @Input() todo!: Todo;

  /**
   * evenimentul de stergere
   */
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  /**
   * adaugare css cand se marcheaza un todo
   */

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
      'is-not-complete': !this.todo.completed,
    };

    return classes;
  }

  /**
   * completare todo
   * @param todo todo-ul dorit
   */

  onToggle(todo: Todo) {
    todo.completed = !todo.completed;
    this.todoService.toggleTodo(todo).subscribe((todo) => console.log(todo));
  }

  /**
   * stergere todo
   * @param todo todo-ul dorit
   */

  onDelete(todo?: Todo) {
    this.deleteTodo.emit(todo);
  }
}
