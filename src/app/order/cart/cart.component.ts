// CartComponent to display and manage items in the user's cart
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    // Fetch cart items when the component loads
    this.orderService.getCartItems().subscribe({
      next: (items) => this.cartItems = items,
      error: (err) => console.error('Error loading cart items:', err)
    });
  }
}
