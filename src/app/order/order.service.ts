// OrderService to manage cart items, order processing, and tracking
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:3000/order';

  constructor(private http: HttpClient) {}

  // Get cart items
  getCartItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cart`);
  }

  // Place an order with cart items
  placeOrder(orderDetails: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/place`, orderDetails);
  }

  // Track order status
  trackOrder(orderId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/track/${orderId}`);
  }
}
