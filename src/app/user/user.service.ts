// UserService to manage user data, cart, etc.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/user'; // Base URL for user-related endpoints

  constructor(private http: HttpClient) {}

  // Get user profile details
  getUserProfile(): Observable<any> {
    return this.http.get(`${this.baseUrl}/profile`);
  }

  // Add an item to the user's cart
  addToCart(item: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/cart/add`, item);
  }

  // Fetch user's cart items
  getCartItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cart`);
  }
}
