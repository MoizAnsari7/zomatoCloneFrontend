import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Role } from './auth/roles.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  get isAdmin() {
    return this.authService.currentUserValue?.role === Role.Admin;
  }

  get isSeller() {
    return this.authService.currentUserValue?.role === Role.Seller;
  }

  get isUser() {
    return this.authService.currentUserValue?.role === Role.User;
  }
}
