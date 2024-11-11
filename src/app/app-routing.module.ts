import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent as RestaurantListComponent } from './restaurant/list/list.component';
import { DetailsComponent as RestaurantDetailsComponent } from './restaurant/details/details.component';
import { CartComponent } from './order/cart/cart.component';
import { SummaryComponent } from './order/summary/summary.component';
import { TrackingComponent } from './order/tracking/tracking.component';


const routes: Routes = [
  { path: 'restaurant', component: RestaurantListComponent },
  { path: 'restaurant/:id', component: RestaurantDetailsComponent },
  { path: 'order/cart', component: CartComponent },
  { path: 'order/summary', component: SummaryComponent },
  { path: 'order/track/:id', component: TrackingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
