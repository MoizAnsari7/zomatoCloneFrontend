// LoginComponent for user login
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    // Define form with email and password fields
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Submit login form
  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = [
        this.loginForm.value.email,
         this.loginForm.value.password
      ]
      this.authService.login(credentials)
        .subscribe({
          next: response => console.log('Login successful', response),
          error: err => console.error('Login failed', err)
        });
    }
  }
}
