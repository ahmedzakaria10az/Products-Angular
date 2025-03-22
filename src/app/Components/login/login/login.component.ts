import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [HttpClientModule,RouterModule,FormsModule,CommonModule],
  providers:[UsersService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: any = {};

  constructor(private userdata: UsersService, private router: Router) {}

  Login(): void {  
    this.userdata.Login(this.user).subscribe({
      next: (response: any) => {
        console.log('Login successful:', response);

        localStorage.setItem('user', JSON.stringify(response.user));

        if (response.user.role === 'admin') {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/']);
        }
      },
      error: (error: any) => {
        console.error('Login failed:', error);
        alert('Invalid credentials, please try again.');
      }
    });
  }

  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }
}