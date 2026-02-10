import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent {
  todos$: Observable<Todo[]> | null = null;
  loading = false;
  errorMessage = '';

  constructor(private http: HttpClient) {}

  fetchTodos() {
    this.loading = true;
    this.errorMessage = '';
    this.todos$ = this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
    this.todos$.subscribe({
      next: (todos) => {
        console.log('Todos fetched:', todos);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching todos:', error);
        this.errorMessage = 'Failed to fetch todos. Check your internet connection.';
        this.loading = false;
      }
    });
  }
}
