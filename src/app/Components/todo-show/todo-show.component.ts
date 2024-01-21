import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-show',
  templateUrl: './todo-show.component.html',
  styleUrls: ['./todo-show.component.css']
})
export class TodoShowComponent {
  @Input() todos!: Todo[];
  @Input() todoActive!: Boolean;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoDone: EventEmitter<Todo> = new EventEmitter();

  onDelete(todo: Todo) {
    this.todoDelete.emit(todo);
  }

  onDone(todo: Todo) {
    this.todoDone.emit(todo);
  }

}
