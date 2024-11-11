// OrderModule for managing cart, order summary, and order tracking
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart/cart.component';
import { SummaryComponent } from './summary/summary.component';
import { TrackingComponent } from './tracking/tracking.component';
import { OrderService } from './order.service';

@NgModule({
  declarations: [
    CartComponent,
    SummaryComponent,
    TrackingComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [OrderService]
})
export class OrderModule {}
