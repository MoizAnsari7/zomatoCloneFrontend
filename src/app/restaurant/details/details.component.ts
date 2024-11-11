// DetailsComponent to display details of a selected restaurant
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  restaurant: any;
  menuItems: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    // Get restaurant ID from route and fetch details
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.restaurantService.getRestaurantDetails(id).subscribe({
        next: (data) => {
          this.restaurant = data.restaurant;
          this.menuItems = data.menuItems;
        },
        error: (err) => console.error('Error fetching restaurant details:', err)
      });
    }
  }
}
