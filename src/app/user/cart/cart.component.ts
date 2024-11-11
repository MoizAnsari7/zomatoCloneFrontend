// CartComponent to display and manage items in the user's cart
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Fetch cart items on component load
    this.userService.getCartItems().subscribe({
      next: (items) => this.cartItems = items,
      error: (err) => console.error('Error loading cart items:', err)
    });
  }
}
