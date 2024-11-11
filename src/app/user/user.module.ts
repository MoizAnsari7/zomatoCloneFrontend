// Angular module for User functionalities
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    ProfileComponent
    CartComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [UserService]
})
export class UserModule {}
