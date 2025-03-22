import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-dashboard',
  imports: [HttpClientModule, RouterModule],
  providers: [UsersService],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  id: number = 0;
  users: any[] = [];
  constructor(private usersData: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersData.getAllUsers().subscribe((users) => (this.users = users));
  }

  confirmDelete(id: number) {
    this.usersData.deleteUserById(id).subscribe(() => this.getUsers());
  }
  viewUser(id: number) {
    this.router.navigate(['/dashboard', id]);
  }
}
