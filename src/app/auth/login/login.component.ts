// src/app/auth/login/login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';  // Assuming AuthService exists in the app
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]], // Email validation
    password: ['', [Validators.required, Validators.minLength(6)]], // Password validation
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,  // AuthService for API calls
    private router: Router  // Router to navigate after successful login
  ) {}

  // Submit the login form
  onLogin() {
    if (this.loginForm.valid) {
      const email : any = this.loginForm.value.email;
      const password : any = this.loginForm.value.password;

      this.authService.login(email , password).subscribe({
        next: (response) => {
          // Store user data or token if needed and navigate to home
          console.log('Login successful', response);
          this.router.navigate(['/home']);  // Adjust route based on your app structure
        },
        error: (err) => {
          console.error('Login failed', err);  // Handle error (e.g., show a message)
        },
      });
    }
  }
}
