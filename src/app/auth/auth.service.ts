// AuthService for managing user authentication logic
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:3000/auth';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('user')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // Register a new user
  register(user: any) {
    return this.http.post(`${this.authUrl}/register`, user);
  }

  // Login user and store token
  login(credentials: any) {
    return this.http.post(`${this.authUrl}/login`, credentials)
      .pipe(
        tap((response: any) => {
          localStorage.setItem('user', JSON.stringify(response.user));
          this.currentUserSubject.next(response.user);
        })
      );
  }

  // Logout the user and clear the local storage
  logout() {
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  // Get current logged-in user
  get currentUserValue() {
    return this.currentUserSubject.value;
  }
}
