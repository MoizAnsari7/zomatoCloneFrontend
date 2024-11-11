// RestaurantModule for managing restaurant-related components and services
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { RestaurantService } from './restaurant.service';

@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [RestaurantService]
})
export class RestaurantModule {}
