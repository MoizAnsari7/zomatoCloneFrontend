// TrackingComponent to display the status of an order
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {
  orderStatus: string = '';
  orderId: string | null | undefined;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('id');
    if (this.orderId) {
      // Track order status based on order ID
      this.orderService.trackOrder(this.orderId).subscribe({
        next: (status) => this.orderStatus = status,
        error: (err) => console.error('Error tracking order:', err)
      });
    }
  }
}
