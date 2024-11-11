// AuthGuard to protect routes based on the user's role
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const user = this.authService.currentUserValue;
    const requiredRoles = next.data['roles'];

    // If no user is logged in, redirect to login
    if (!user) {
      this.router.navigate(['/login']);
      return false;
    }

    // If the user has a required role, allow access
    if (requiredRoles && requiredRoles.includes(user.role)) {
      return true;
    }

    // Otherwise, redirect to home (or an unauthorized page)
    this.router.navigate(['/home']);
    return false;
  }
}
