import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Emails {
  email: string;
}
interface User {
  id?: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  
  constructor(private httpClient: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.httpClient.get('http://localhost:2000/users');
  }

  deleteUserById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:2000/users/${id}`);
  }

  addNewUser(userData: User): Observable<User> {
    const newUser = {
      ...userData,
      id: Date.now().toString(),
    };

    return this.httpClient.post<User>('http://localhost:2000/users', newUser);
  }

  getUserEmails(): Observable<string[]> {
    return this.httpClient
      .get<Emails[]>('http://localhost:2000/users')
      .pipe(map((users) => users.map((user) => user.email)));
  }

  getUserByID(id: number): Observable<User> {
    return this.httpClient.get<User>(`http://localhost:2000/users/${id}`);
  }
  Login(user: any): Observable<any> {
    return this.httpClient.post<any>('/login', user);
  }
}
