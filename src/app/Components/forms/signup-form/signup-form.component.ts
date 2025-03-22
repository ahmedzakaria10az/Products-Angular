import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  PasswordMatched,
  emailValidator,
} from '../../../CrossFieldValidation/ConfirmedPass';
import { Router, RouterModule } from '@angular/router';
import { DynamicDataService } from '../../services/dynamic-data.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule, RouterModule],
  providers: [UsersService],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css',
})
export class SignupFormComponent {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersData: UsersService
  ) {
    this.signupForm = fb.group(
      {
        fullName: [
          '',
          [Validators.required, Validators.pattern('[A-Za-z]{2,}')],
        ],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: [
          '',
          [Validators.required, Validators.pattern('^[0-9]{10}$')],
        ],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmedpassword: ['', [Validators.required]],
      },
      { validators: [PasswordMatched(), emailValidator()] }
    );
  }

  get fullName() {
    return this.signupForm.get('fullName');
  }
  get lastName() {
    return this.signupForm.get('lastName');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get phoneNumber() {
    return this.signupForm.get('phoneNumber');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get confirmedpassword() {
    return this.signupForm.get('confirmedpassword');
  }

  onSubmit() {
    this.usersData.getUserEmails().subscribe((emails) => {
      // console.log(this.signupForm?.value?.email);
      // console.log(emails);
      if (emails.includes(this.signupForm?.value?.email)) {
        this.signupForm.setErrors({ EmailExists: true });
      } else if (this.signupForm.valid) {
        const { confirmedpassword, ...userData } = this.signupForm.value;
        this.usersData.addNewUser(userData).subscribe(() => {
          this.router.navigate(['/']);
        });
      }
    });
  }
}
