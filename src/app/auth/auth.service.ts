// AuthService handles login, registration, and token management
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/auth'; // Backend URL
  private currentUserSubject = new BehaviorSubject<any>(null); // To store the current user
  public currentUser$ = this.currentUserSubject.asObservable(); // Observable for current user

  constructor(private http: HttpClient) {}

  // Login user and save token in local storage
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password }).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
        this.currentUserSubject.next(response.user);
      })
    );
  }

  // Register a new user
  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  // Logout user and clear token
  logout() {
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }

  // Get current logged-in user
  getCurrentUser() {
    return this.currentUserSubject.value;
  }
}
