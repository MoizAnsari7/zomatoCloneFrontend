// ListComponent to display a list of restaurants
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  restaurants: any[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    // Fetch restaurant list when component loads
    this.restaurantService.getRestaurants().subscribe({
      next: (data) => this.restaurants = data,
      error: (err) => console.error('Error fetching restaurants:', err)
    });
  }
}
