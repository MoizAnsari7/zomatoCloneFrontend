// SummaryComponent to display order details before confirmation
import { Component } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  orderDetails: any = {};

  constructor(private orderService: OrderService) {}

  placeOrder(): void {
    // Call service to place the order
    this.orderService.placeOrder(this.orderDetails).subscribe({
      next: (response) => console.log('Order placed:', response),
      error: (err) => console.error('Error placing order:', err)
    });
  }
}
