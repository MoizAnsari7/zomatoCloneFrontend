// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; // Define your environment URL here
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }


  // Register user method
  register(userData:any) {
    return this.http.post<any>(`${environment.apiUrl}/register`, userData); // Make sure the endpoint exists in backend
  }

  // Login method to authenticate user and store JWT token
  login(email: string, password: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/auth/login`, { email, password })
      .pipe((user) => {
        // Store JWT token in localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      });
  }

  // Get the current user from localStorage
  get currentUserValue() {
    return this.currentUserSubject.value;
  }

  // Logout method to remove the JWT token
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  // Method to add JWT token to headers
  getAuthHeaders() {
    const currentUser = this.currentUserValue;
    if (currentUser && currentUser.access_token) {
      return new HttpHeaders({
        Authorization: `Bearer ${currentUser.access_token}`,
      });
    }
    return new HttpHeaders();
  }
}
