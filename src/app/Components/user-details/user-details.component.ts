import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [RouterModule, HttpClientModule],
  providers: [UsersService],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  id: any;
  user: any;
  constructor(
    private usersData: UsersService,
    private active: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getID();
    this.getDataById();
  }
  getID() {
    this.id = Number(this.active.snapshot.paramMap.get('id'));
  }
  getDataById() {
    this.usersData.getUserByID(this.id).subscribe((user) => (this.user = user));
  }
}
