import { Component } from '@angular/core';
import { Todo, TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  template: `
   <div class="container">
  <h2>Todo List</h2>

  <input
    type="text"
    [(ngModel)]="newTodoTitle"
    placeholder="New todo"
    class="form-control"
  />
  <button (click)="addTodo()" class="btn btn-primary mt-2">Add Todo</button>

  <ul class="list-group mt-4">
    <li *ngFor="let todo of todos" class="list-group-item">
      {{ todo.title }}
      <button (click)="removeTodo(todo.id)" class="btn btn-danger btn-sm float-right">
        Remove
      </button>
    </li>
  </ul>
</div>

  `,
  styles: ``
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodoTitle: string = '';

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  addTodo() {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle);
      this.newTodoTitle = '';
      this.todos = this.todoService.getTodos(); // Update the list
    }
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id);
    this.todos = this.todoService.getTodos(); // Update the list
  }
}
