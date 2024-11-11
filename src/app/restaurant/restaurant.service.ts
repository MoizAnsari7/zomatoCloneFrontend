// RestaurantService to fetch restaurants list and details
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private baseUrl = 'http://localhost:3000/restaurant'; // Base URL for restaurant-related endpoints

  constructor(private http: HttpClient) {}

  // Fetch list of all restaurants
  getRestaurants(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`);
  }

  // Fetch details of a specific restaurant by ID
  getRestaurantDetails(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/details/${id}`);
  }
}
