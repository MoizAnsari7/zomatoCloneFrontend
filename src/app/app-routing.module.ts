import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent as RestaurantListComponent } from './restaurant/list/list.component';
import { DetailsComponent as RestaurantDetailsComponent } from './restaurant/details/details.component';


const routes: Routes = [
  { path: 'restaurant', component: RestaurantListComponent },
  { path: 'restaurant/:id', component: RestaurantDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
