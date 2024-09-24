import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];

  constructor() {
    // Seed with a default task
    this.todos = [
      { id: 1, title: 'Learn Angular', completed: false },
    ];
  }

  // Get all todos
  getTodos(): Todo[] {
    return [...this.todos];
  }

  // Add a new todo
  addTodo(title: string): void {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      title,
      completed: false,
    };
    this.todos.push(newTodo);
  }

  // Remove a todo by id
  removeTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
