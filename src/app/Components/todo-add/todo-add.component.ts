import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  title!: string;
  desc!: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor(private _elementRef: ElementRef) { }

  ModifyDOMElement(): void {
    //Do whatever you wish with the DOM element.
    let domElement = this._elementRef.nativeElement.querySelector(`#formToAdd`);
    console.log(domElement);
    domElement.click();
    console.log('clicked..');
  }

  onSubmit() {
    if (this.title && this.desc) {
      const todo = {
        title: this.title,
        desc: this.desc,
        isActive: true
      }
      console.log('form clicked');
      this.todoAdd.emit(todo);
      this.ModifyDOMElement();
    }
  }

  onButtonClick() {
    this.title = "";
    this.desc = "";
  }
}
