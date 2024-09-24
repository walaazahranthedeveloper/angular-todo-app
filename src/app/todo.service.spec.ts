import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService); // Inject the service
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return default todos', () => {
    const todos = service.getTodos();
    expect(todos.length).toBe(1);
    expect(todos[0].title).toBe('Learn Angular');
  });

  it('should add a new todo', () => {
    service.addTodo('Write Tests');
    const todos = service.getTodos();
    expect(todos.length).toBe(2);
    expect(todos[1].title).toBe('Write Tests');
  });

  it('should remove a todo by id', () => {
    service.addTodo('Write Tests');
    service.removeTodo(1); // Remove the first todo
    const todos = service.getTodos();
    expect(todos.length).toBe(1);
    expect(todos[0].title).toBe('Write Tests');
  });
});
