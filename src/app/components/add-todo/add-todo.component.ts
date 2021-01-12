import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from './../../models/todo-model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  /**
   * actiunea de creare a unui todo
   */
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  submit() {
    const todo: Todo = {
      id: Math.floor(Math.random() * Math.floor(100)),
      title: this.form.get('title')!.value,
      completed: false
    }
    this.addTodo.emit(todo);
    this.form.reset();
  }

}
