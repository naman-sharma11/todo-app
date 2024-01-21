import { Component } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.css']
})
export class TodoMainComponent {
  todos: Todo[];

  constructor () {
    this.todos = [
      {
        title: "Task 1",
        desc: "This is description of task 1",
        isActive: true
      }, 
      {
        title: "Task 2",
        desc: "This is description of task 2",
        isActive: true
      }, 
      {
        title: "Task 3",
        desc: "This is description of task 3",
        isActive: false
      }, 
      {
        title: "Task 4",
        desc: "This is description of task 4",
        isActive: false
      }
    ]
  }

  todoDelete(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  todoDone(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].isActive = !this.todos[index].isActive;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

}
