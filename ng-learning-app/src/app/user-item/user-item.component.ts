import { Component, Input, Output, EventEmitter } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  @Input() user!: User;
  @Output() deleteUser = new EventEmitter<number>();
  @Output() editUser = new EventEmitter<User>();
  @Output() toggleRole = new EventEmitter<User>();

  onDelete(): void {
    this.deleteUser.emit(this.user.id);
  }

  onEdit(): void {
    this.editUser.emit(this.user);
  }

  onToggleRole(): void {
    this.toggleRole.emit(this.user);
  }
}
