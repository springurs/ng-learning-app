import { Component } from '@angular/core';
import { DataService, User } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[];

  constructor(private dataService: DataService) {
    this.users = this.dataService.getUsers();
  }

  onDeleteUser(id: number): void {
    this.dataService.deleteUser(id);
    this.users = this.dataService.getUsers();
  }

  onEditUser(user: User): void {
    const newName = prompt('Enter new name:', user.name);
    if (newName) {
      const updatedUser = { ...user, name: newName };
      this.dataService.updateUser(updatedUser);
      this.users = this.dataService.getUsers();
    }
  }

  onToggleRole(user: User): void {
    this.dataService.toggleUserRole(user.id);
    this.users = this.dataService.getUsers();
  }
}
