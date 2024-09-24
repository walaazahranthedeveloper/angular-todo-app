import { TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';  // Import the standalone component
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Add if you have services that depend on HttpClient

describe('TodoListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListComponent, HttpClientTestingModule],  // Add TodoListComponent to the imports array
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TodoListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
