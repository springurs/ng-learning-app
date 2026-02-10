import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private products: Product[] = [
    { id: 1, name: 'Laptop', price: 999, inStock: true },
    { id: 2, name: 'Mouse', price: 25, inStock: false },
    { id: 3, name: 'Keyboard', price: 75, inStock: true },
    { id: 4, name: 'Monitor', price: 300, inStock: true },
    { id: 5, name: 'Headphones', price: 50, inStock: false },
  ];

  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user' },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getUsers(): User[] {
    return this.users;
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }

  updateUser(user: User): void {
    this.users = this.users.map(u => u.id === user.id ? user : u);
  }

  toggleUserRole(id: number): void {
    this.users = this.users.map(u => u.id === id ? { ...u, role: u.role === 'admin' ? 'user' : 'admin' } : u);
  }

  toggleProductStock(id: number): void {
    this.products = this.products.map(p => p.id === id ? { ...p, inStock: !p.inStock } : p);
  }
}
